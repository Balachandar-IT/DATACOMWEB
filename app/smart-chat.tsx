"use client";

import { useEffect, useRef, useState } from "react";
import { getApiBase } from "./api-base";

type ChatMessage = {
  id: number;
  kind: "user" | "assistant";
  text: string;
};

type LiveChatMessage = {
  id: number;
  author: "owner" | "visitor";
  body: string;
  createdAt: string;
};

const sessionKey = "datacom-session-id";

function getSessionId() {
  if (typeof window === "undefined") return "";
  let sessionId = window.localStorage.getItem(sessionKey);
  if (!sessionId) {
    sessionId = window.crypto?.randomUUID ? window.crypto.randomUUID() : `session-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    window.localStorage.setItem(sessionKey, sessionId);
  }
  return sessionId;
}

function currentPagePath() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname + window.location.search;
}

function chatTime(value: string) {
  try {
    return new Intl.DateTimeFormat("en-SG", { hour: "numeric", minute: "2-digit" }).format(new Date(value));
  } catch {
    return "";
  }
}

export function SmartChat({ servicePage = false }: { servicePage?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTechShedOpen, setIsTechShedOpen] = useState(false);
  const [techShedTab, setTechShedTab] = useState<"chat" | "whatsapp">("chat");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [liveMessages, setLiveMessages] = useState<LiveChatMessage[]>([]);
  const [liveMessage, setLiveMessage] = useState("");
  const [liveState, setLiveState] = useState<"idle" | "sending" | "error">("idle");
  const lastOwnerMessageId = useRef(0);
  const firstLiveLoad = useRef(true);

  useEffect(() => {
    let mounted = true;

    async function loadLiveMessages() {
      const sessionId = getSessionId();
      if (!sessionId) return;
      try {
        const response = await fetch(`${getApiBase()}/live-chat/messages?sessionId=${encodeURIComponent(sessionId)}`, {
          cache: "no-store",
        });
        if (!response.ok) return;
        const payload = (await response.json()) as { messages?: LiveChatMessage[] };
        if (!mounted) return;

        const nextMessages = payload.messages || [];
        const newestOwnerMessage = nextMessages
          .filter((item) => item.author === "owner")
          .reduce((max, item) => Math.max(max, item.id), 0);

        setLiveMessages(nextMessages);
        if (newestOwnerMessage > lastOwnerMessageId.current && !firstLiveLoad.current) {
          setIsOpen(false);
          setTechShedTab("chat");
          setIsTechShedOpen(true);
        }
        lastOwnerMessageId.current = Math.max(lastOwnerMessageId.current, newestOwnerMessage);
        firstLiveLoad.current = false;
      } catch {
        if (mounted) firstLiveLoad.current = false;
      }
    }

    loadLiveMessages();
    const timer = window.setInterval(loadLiveMessages, 5000);
    return () => {
      mounted = false;
      window.clearInterval(timer);
    };
  }, []);

  const openChat = () => {
    setIsTechShedOpen(false);
    setIsOpen(true);
  };
  const closeChat = () => setIsOpen(false);
  const openTechShed = () => {
    setIsOpen(false);
    setTechShedTab("chat");
    setIsTechShedOpen(true);
  };
  const closeTechShed = () => setIsTechShedOpen(false);

  async function sendLiveMessage() {
    const trimmed = liveMessage.trim();
    if (!trimmed) return;

    setLiveState("sending");
    try {
      const response = await fetch(`${getApiBase()}/live-chat/messages`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          sessionId: getSessionId(),
          body: trimmed,
          pagePath: currentPagePath(),
        }),
      });
      const payload = (await response.json()) as { message?: LiveChatMessage; error?: string };
      if (!response.ok || !payload.message) throw new Error(payload.error || "Message was not sent");
      setLiveMessages((current) => [...current, payload.message as LiveChatMessage]);
      setLiveMessage("");
      setLiveState("idle");
    } catch {
      setLiveState("error");
    }
  }

  return (
    <>
      <button
        className={servicePage ? "services-ai-float" : "contact-float"}
        type="button"
        onClick={openChat}
        aria-label="Open Smart Chat"
      >
        <span aria-hidden="true" />
        {servicePage ? "Chat with AI" : "Get in touch"}
      </button>
      <button
        className={servicePage ? "chat-button services-chat-button" : "chat-button"}
        type="button"
        onClick={openTechShed}
        aria-label="Open TechShed chat"
      >
        <span aria-hidden="true" />
      </button>

      {isOpen ? (
        <section className="smart-chat-panel" aria-label="Smart Chat">
          <header>
            <div>
              <span aria-hidden="true" />
              <strong>Smart Chat</strong>
            </div>
            <button type="button" onClick={closeChat} aria-label="Minimize Smart Chat">
              -
            </button>
          </header>
          <div className="smart-chat-body">
            <time>Today</time>
            <article className="smart-chat-message">
              <span aria-hidden="true" />
              <p>
                Welcome to our site! I&apos;m an AI assistant here to answer any
                questions you have and guide you around. How can I help you today?
              </p>
              <small>4:47 PM</small>
            </article>
            {messages.map((chat) =>
              chat.kind === "user" ? (
                <article className="smart-chat-user-message" key={chat.id}>
                  <span aria-hidden="true" />
                  <p>{chat.text}</p>
                  <small>4:49 PM</small>
                </article>
              ) : (
                <article className="smart-chat-reply-message" key={chat.id}>
                  <span aria-hidden="true" />
                  <p>{chat.text}</p>
                  <small>4:49 PM</small>
                </article>
              ),
            )}
            <form
              className="smart-chat-input"
              onSubmit={(event) => {
                event.preventDefault();
                const trimmedMessage = message.trim();
                if (!trimmedMessage) {
                  return;
                }

                const id = Date.now();
                setMessages((currentMessages) => [
                  ...currentMessages,
                  { id, kind: "user", text: trimmedMessage },
                  {
                    id: id + 1,
                    kind: "assistant",
                    text:
                      "Thanks! Tell us a little more about what you need, and our team will recommend the right Datacom solution.",
                  },
                ]);
                setMessage("");
              }}
            >
              <input
                aria-label="Chat message"
                placeholder="Type your message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <button type="submit" aria-label="Send message">
                <span aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      ) : null}

      {isTechShedOpen ? (
        <section className="techshed-panel" aria-label="TechShed chat">
          <header>
            <div>
              <strong>TechShed</strong>
              <span>We&apos;ll reply as soon as we can</span>
            </div>
            <button type="button" onClick={closeTechShed} aria-label="Close TechShed chat">
              x
            </button>
          </header>
          {techShedTab === "chat" ? (
            <div className="techshed-body">
              <time>2:22 PM</time>
              {liveMessages.length === 0 ? (
                <>
                  <article className="techshed-message">
                    <small>Datacom Enterprise Pte Ltd</small>
                    <p>Hi there! Welcome to the site. Let me know if you have any questions.</p>
                  </article>
                  <article className="techshed-message">
                    <p>If our team is online, you can chat here directly. You can also use WhatsApp anytime.</p>
                  </article>
                </>
              ) : null}
              {liveMessages.map((chat) => (
                <article className={chat.author === "owner" ? "techshed-message" : "techshed-user-message"} key={chat.id}>
                  {chat.author === "owner" ? <small>Datacom Enterprise Pte Ltd</small> : null}
                  <p>{chat.body}</p>
                  <small>{chatTime(chat.createdAt)}</small>
                </article>
              ))}
              <form
                className="techshed-live-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  sendLiveMessage();
                }}
              >
                <input
                  aria-label="Live chat message"
                  placeholder="Type your message..."
                  value={liveMessage}
                  onChange={(event) => setLiveMessage(event.target.value)}
                  disabled={liveState === "sending"}
                />
                <button type="submit" disabled={!liveMessage.trim() || liveState === "sending"}>
                  {liveState === "sending" ? "..." : "Send"}
                </button>
              </form>
              {liveState === "error" ? <p className="techshed-error">Message was not sent. Please try WhatsApp.</p> : null}
            </div>
          ) : (
            <div className="techshed-body whatsapp">
              <article className="techshed-whatsapp-card">
                <p>
                  We&apos;re available on WhatsApp during Mon - Fri, 09:00 - 18:00.
                  We&apos;d love to hear from you.
                </p>
                <a href="https://wa.me/6589393191" target="_blank" rel="noreferrer">
                  Open WhatsApp
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          )}
          <footer>
            <button
              className={techShedTab === "chat" ? "active" : ""}
              type="button"
              onClick={() => setTechShedTab("chat")}
              aria-label="Chat tab"
            >
              <span aria-hidden="true" />
            </button>
            <button
              className={techShedTab === "whatsapp" ? "active" : ""}
              type="button"
              onClick={() => setTechShedTab("whatsapp")}
              aria-label="WhatsApp tab"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  className="whatsapp-bubble"
                  d="M12 3.2a8.6 8.6 0 0 0-7.4 13L3.7 20l3.9-1a8.6 8.6 0 1 0 4.4-15.8Z"
                />
                <path
                  className="whatsapp-phone"
                  d="M8.7 8.3c.2-.4.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.5.7c-.1.1-.2.3-.1.5.4.8 1 1.5 1.7 2 .8.6 1.5.8 1.7.8.2 0 .3-.1.5-.3l.7-.9c.2-.2.4-.2.6-.1l1.8.8c.3.2.4.3.4.5 0 .5-.4 1.4-.9 1.7-.5.4-1.4.6-2.6.2-1.9-.6-3.5-1.8-4.8-3.2-1.2-1.4-2-2.9-2.1-4 0-.5.6-1.6 1-1.8Z"
                />
              </svg>
            </button>
          </footer>
        </section>
      ) : null}
    </>
  );
}
