export type ShopCatalogOption = {
  name: string;
  values: string[];
};

export type ShopCatalogProduct = {
  title: string;
  slug: string;
  price: string;
  comparePrice?: string;
  image: string;
  galleryImages: string[];
  hoverImage: string;
  productHref: string;
  stock: "in" | "out";
  ribbon?: string;
  sale: boolean;
  quantity: boolean;
  options: ShopCatalogOption[];
};

export const shopCatalogPages = [
  [
    {
      "title": "HP EliteBook 8 G1i 14\" AI PC",
      "slug": "hp-elitebook-8-g1i-14-ai-pc",
      "price": "SGD 2,709.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-3fb84780ab55.png",
      "galleryImages": [
        "/assets/vendor/file-3fb84780ab55.png",
        "/assets/vendor/file-2775ebdf19c3.png",
        "/assets/vendor/file-7cc92459f358.png",
        "/assets/vendor/file-a4abbc17544c.png",
        "/assets/vendor/file-78d312e9f07c.png"
      ],
      "hoverImage": "/assets/vendor/file-2775ebdf19c3.png",
      "productHref": "/product-page/hp-elitebook-8-g1i-14-ai-pc",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Processor",
          "values": [
            "Core Ultra 5",
            "Core Ultra 7"
          ]
        },
        {
          "name": "Storage",
          "values": [
            "1TB SSD",
            "512GB SSD"
          ]
        }
      ]
    },
    {
      "title": "Tough CX Series Vertical Cable Management",
      "slug": "tough-cx-series-vertical-cable-management",
      "price": "SGD 92.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-85968ee70633.png",
      "galleryImages": [
        "/assets/vendor/file-85968ee70633.png",
        "/assets/vendor/file-6ca8e38f6637.png"
      ],
      "hoverImage": "/assets/vendor/file-6ca8e38f6637.png",
      "productHref": "/product-page/tough-cx-series-vertical-cable-management",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough Cable Management for 19\" Server Rack",
      "slug": "tough-cable-management-for-19-server-rack",
      "price": "SGD 22.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-d9b4ea9d6434.jpg",
      "galleryImages": [
        "/assets/vendor/file-d9b4ea9d6434.jpg"
      ],
      "hoverImage": "/assets/vendor/file-d9b4ea9d6434.jpg",
      "productHref": "/product-page/tough-cable-management-for-19-server-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        },
        {
          "name": "Rack-U",
          "values": [
            "1U",
            "2U"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 42U, 800mm x 1200mm(D)- 4 Com Equipment Rack-Bi-Fold PerforatedDoor",
      "slug": "tough-cx-42u-800mm-x-1200mm-d-compartmequipment-rack-bi-fold-perfor",
      "price": "SGD 2,849.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-880aa802e37b.jpg",
      "galleryImages": [
        "/assets/vendor/file-880aa802e37b.jpg",
        "/assets/vendor/file-418fac5d13d9.jpg"
      ],
      "hoverImage": "/assets/vendor/file-418fac5d13d9.jpg",
      "productHref": "/product-page/tough-cx-42u-800mm-x-1200mm-d-compartmequipment-rack-bi-fold-perfor",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 42U, 800mm x 1200mm(D)- 2 Com Equipment Rack-Bi-Fold PerforatedDoor",
      "slug": "tough-cx-42u-800mm-x-1200mm-d-compartmequipment-rack-bi-fold-perforateddoor",
      "price": "SGD 2,559.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-ff1426f617f9.jpg",
      "galleryImages": [
        "/assets/vendor/file-ff1426f617f9.jpg",
        "/assets/vendor/file-d20fb7e372a2.jpg"
      ],
      "hoverImage": "/assets/vendor/file-d20fb7e372a2.jpg",
      "productHref": "/product-page/tough-cx-42u-800mm-x-1200mm-d-compartmequipment-rack-bi-fold-perforateddoor",
      "stock": "out",
      "sale": false,
      "quantity": false,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 21U, 800mm x 1000mm(D)--Equipment Rack - Bi-Fold PerforatedDoor",
      "slug": "tough-cx-21u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "price": "SGD 1,440.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-34b1026deb72.png",
      "galleryImages": [
        "/assets/vendor/file-34b1026deb72.png",
        "/assets/vendor/file-ade5f28556f9.png",
        "/assets/vendor/file-69cdf0f36dfa.png",
        "/assets/vendor/file-33bea5340739.png",
        "/assets/vendor/file-e546b2f1b24b.png",
        "/assets/vendor/file-30a0f8144071.png",
        "/assets/vendor/file-b972e4f99702.png"
      ],
      "hoverImage": "/assets/vendor/file-ade5f28556f9.png",
      "productHref": "/product-page/tough-cx-21u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 27U, 800mm x 1000mm(D)--Equipment Rack - Bi-Fold PerforatedDoor",
      "slug": "tough-cx-27u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "price": "SGD 1,486.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-34b1026deb72.png",
      "galleryImages": [
        "/assets/vendor/file-34b1026deb72.png",
        "/assets/vendor/file-e546b2f1b24b.png",
        "/assets/vendor/file-69cdf0f36dfa.png",
        "/assets/vendor/file-b972e4f99702.png",
        "/assets/vendor/file-33bea5340739.png",
        "/assets/vendor/file-ade5f28556f9.png",
        "/assets/vendor/file-30a0f8144071.png"
      ],
      "hoverImage": "/assets/vendor/file-e546b2f1b24b.png",
      "productHref": "/product-page/tough-cx-27u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 31U, 800mm x 1000mm(D)--Equipment Rack - Bi-Fold PerforatedDoor",
      "slug": "tough-cx-31u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "price": "SGD 1,590.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-34b1026deb72.png",
      "galleryImages": [
        "/assets/vendor/file-34b1026deb72.png",
        "/assets/vendor/file-e546b2f1b24b.png",
        "/assets/vendor/file-69cdf0f36dfa.png",
        "/assets/vendor/file-30a0f8144071.png",
        "/assets/vendor/file-33bea5340739.png",
        "/assets/vendor/file-b972e4f99702.png"
      ],
      "hoverImage": "/assets/vendor/file-e546b2f1b24b.png",
      "productHref": "/product-page/tough-cx-31u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 36U, 800mm x 1000mm(D)--Equipment Rack - Bi-Fold PerforatedDoor",
      "slug": "tough-cx-36u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "price": "SGD 1,660.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-f562d4410f53.png",
      "galleryImages": [
        "/assets/vendor/file-f562d4410f53.png",
        "/assets/vendor/file-cfaad4e34b6e.png",
        "/assets/vendor/file-f16848aa77ee.png",
        "/assets/vendor/file-44f1ac16904a.png",
        "/assets/vendor/file-4940bffd3327.png",
        "/assets/vendor/file-1bde77277196.png",
        "/assets/vendor/file-8fa1a309f85a.png"
      ],
      "hoverImage": "/assets/vendor/file-cfaad4e34b6e.png",
      "productHref": "/product-page/tough-cx-36u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 45U, 800mm x 1000mm(D)--Equipment Rack - Bi-Fold PerforatedDoor",
      "slug": "tough-cx-45u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "price": "SGD 2,450.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-f2ca555884dd.png",
      "galleryImages": [
        "/assets/vendor/file-f2ca555884dd.png",
        "/assets/vendor/file-ac8c5db47646.png",
        "/assets/vendor/file-e47a5c0de3b7.png",
        "/assets/vendor/file-9a3205485c57.png",
        "/assets/vendor/file-e3578393ddb8.png"
      ],
      "hoverImage": "/assets/vendor/file-ac8c5db47646.png",
      "productHref": "/product-page/tough-cx-45u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 48U, 800mm x 1000mm(D)--Equipment Rack - Bi-Fold PerforatedDoor",
      "slug": "cx-42u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "price": "SGD 2,750.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-ce2a95016cf3.png",
      "galleryImages": [
        "/assets/vendor/file-ce2a95016cf3.png",
        "/assets/vendor/file-06422dacda43.png",
        "/assets/vendor/file-a86b0ab32541.png",
        "/assets/vendor/file-2afba2f2d205.png",
        "/assets/vendor/file-a134b68f8ad8.png"
      ],
      "hoverImage": "/assets/vendor/file-06422dacda43.png",
      "productHref": "/product-page/cx-42u-800mm-x-1000mm-d-equipment-rack-bi-fold-perforateddoor",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 42U, 800mm x 1200mm(D)--Equipment Rack - Bi-Fold PerforatedDoor",
      "slug": "tough-cx-42u-800mm-x-1200mm-d-equipment-rack-bi-fold-perforateddoor",
      "price": "SGD 2,370.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-c14145de84e2.png",
      "galleryImages": [
        "/assets/vendor/file-c14145de84e2.png",
        "/assets/vendor/file-484723b44c40.png",
        "/assets/vendor/file-90e7448b4fbe.png",
        "/assets/vendor/file-90ecf95cd759.png"
      ],
      "hoverImage": "/assets/vendor/file-484723b44c40.png",
      "productHref": "/product-page/tough-cx-42u-800mm-x-1200mm-d-equipment-rack-bi-fold-perforateddoor",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 42U, 600mm x 1200mm(D)--Equipment Rack - Bi-Fold PerforatedDoor",
      "slug": "tough-cx-42u-600mm-x-1200mm-d-equipment-rack-bi-fold-perforated-front-door",
      "price": "SGD 2,289.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-587026b0309f.png",
      "galleryImages": [
        "/assets/vendor/file-587026b0309f.png",
        "/assets/vendor/file-17090ca7605d.png",
        "/assets/vendor/file-c8d0c0ee70aa.png",
        "/assets/vendor/file-7c9de16bb641.png",
        "/assets/vendor/file-ce36cf54f99c.png"
      ],
      "hoverImage": "/assets/vendor/file-17090ca7605d.png",
      "productHref": "/product-page/tough-cx-42u-600mm-x-1200mm-d-equipment-rack-bi-fold-perforated-front-door",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 42U, 800mm x 1000mm(D)--Equipment Rack",
      "slug": "tough-cx-42u-800mm-x-1000mm-d-equipment-rack",
      "price": "SGD 1,599.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-f562d4410f53.png",
      "galleryImages": [
        "/assets/vendor/file-f562d4410f53.png",
        "/assets/vendor/file-44f1ac16904a.png",
        "/assets/vendor/file-f16848aa77ee.png",
        "/assets/vendor/file-4940bffd3327.png",
        "/assets/vendor/file-1bde77277196.png",
        "/assets/vendor/file-8fa1a309f85a.png",
        "/assets/vendor/file-cfaad4e34b6e.png"
      ],
      "hoverImage": "/assets/vendor/file-44f1ac16904a.png",
      "productHref": "/product-page/tough-cx-42u-800mm-x-1000mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 42U, 800mm x 800mm(D)--Equipment Rack",
      "slug": "tough-cx-42u-800mm-x-800mm-d-equipment-rack",
      "price": "SGD 1,369.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-4940bffd3327.png",
      "galleryImages": [
        "/assets/vendor/file-4940bffd3327.png",
        "/assets/vendor/file-f16848aa77ee.png",
        "/assets/vendor/file-cfaad4e34b6e.png",
        "/assets/vendor/file-1bde77277196.png",
        "/assets/vendor/file-44f1ac16904a.png",
        "/assets/vendor/file-f562d4410f53.png",
        "/assets/vendor/file-8fa1a309f85a.png"
      ],
      "hoverImage": "/assets/vendor/file-f16848aa77ee.png",
      "productHref": "/product-page/tough-cx-42u-800mm-x-800mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "DS423+ Seagate Iron Wolf聽聽3.5 4TB x 2聽 unit",
      "slug": "synology-diskstation-ds423-1",
      "price": "SGD 1,157.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-5655b0d1a6f4.jpg",
      "galleryImages": [
        "/assets/vendor/file-5655b0d1a6f4.jpg",
        "/assets/vendor/file-29ac00ac95b7.png"
      ],
      "hoverImage": "/assets/vendor/file-29ac00ac95b7.png",
      "productHref": "/product-page/synology-diskstation-ds423-1",
      "stock": "out",
      "sale": false,
      "quantity": false,
      "options": []
    },
    {
      "title": "DS423+Synology Plus Series 3.5 4TB",
      "slug": "synology-diskstation-ds423",
      "price": "SGD 0.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-5655b0d1a6f4.jpg",
      "galleryImages": [
        "/assets/vendor/file-5655b0d1a6f4.jpg",
        "/assets/vendor/file-34779c782e48.png"
      ],
      "hoverImage": "/assets/vendor/file-34779c782e48.png",
      "productHref": "/product-page/synology-diskstation-ds423",
      "stock": "out",
      "ribbon": "SALE",
      "sale": true,
      "quantity": false,
      "options": []
    },
    {
      "title": "HPE ProLiant DL380 Gen10 Plus 8SFF BTO Server (P43358-B21)",
      "slug": "hpe-proliant-dl380-gen10-plus-8sff-bto-server-p43358-b21",
      "price": "SGD 0.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-cd450347a122.png",
      "galleryImages": [
        "/assets/vendor/file-cd450347a122.png",
        "/assets/vendor/file-12b94bdb484e.png",
        "/assets/vendor/file-c2afccd784d9.png",
        "/assets/vendor/file-3e492635434e.png",
        "/assets/vendor/file-60b2b2c836a4.png",
        "/assets/vendor/file-fd2d4c5356b5.png"
      ],
      "hoverImage": "/assets/vendor/file-12b94bdb484e.png",
      "productHref": "/product-page/hpe-proliant-dl380-gen10-plus-8sff-bto-server-p43358-b21",
      "stock": "out",
      "ribbon": "SALE",
      "sale": true,
      "quantity": false,
      "options": []
    },
    {
      "title": "HPE ProLiant DL320 Gen11 5416S 2.0GHz 16鈥慶ore 1P 32GB鈥慠 MR408i鈥憃 8SFF 500W PS Se",
      "slug": "hpe-proliant-dl320-gen11-5416s-2-0ghz-16-core-1p-32gb-r-mr408i-o-8sff-500w-ps-se",
      "price": "SGD 0.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-22783c4f40fd.webp",
      "galleryImages": [
        "/assets/vendor/file-22783c4f40fd.webp",
        "/assets/vendor/file-4e609446df44.webp",
        "/assets/vendor/file-533ffb4c7eaf.webp",
        "/assets/vendor/file-9179e8b77b97.webp"
      ],
      "hoverImage": "/assets/vendor/file-4e609446df44.webp",
      "productHref": "/product-page/hpe-proliant-dl320-gen11-5416s-2-0ghz-16-core-1p-32gb-r-mr408i-o-8sff-500w-ps-se",
      "stock": "out",
      "ribbon": "SALE",
      "sale": true,
      "quantity": false,
      "options": []
    },
    {
      "title": "Tough 19-inch 8way IEC13 socket & 2way IEC19 socket with C16A input",
      "slug": "tough-19-inch-8way-iec13-socket-2way-iec19-socket-with-c16a-input",
      "price": "SGD 269.50",
      "comparePrice": "",
      "image": "/assets/vendor/file-5920dcc86f2e.png",
      "galleryImages": [
        "/assets/vendor/file-5920dcc86f2e.png",
        "/assets/vendor/file-033edfb3b090.png",
        "/assets/vendor/file-de17bedbaf1d.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-033edfb3b090.png",
      "productHref": "/product-page/tough-19-inch-8way-iec13-socket-2way-iec19-socket-with-c16a-input",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough 24 way PDU 32A (20) C13 (4) C19, input C Form 32A",
      "slug": "tough-24-way-pdu-32a-20-c13-4-c19-input-c-form-32a",
      "price": "SGD 430.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-4c88ee41d7f3.png",
      "galleryImages": [
        "/assets/vendor/file-4c88ee41d7f3.png",
        "/assets/vendor/file-51bc9887bc0e.png",
        "/assets/vendor/file-c08dedec4f39.png",
        "/assets/vendor/file-9ff8dcb98f78.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-51bc9887bc0e.png",
      "productHref": "/product-page/tough-24-way-pdu-32a-20-c13-4-c19-input-c-form-32a",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough 24 ways 13A Power Distribution Outlet with 13A Input, 3M cable",
      "slug": "tough-24-ways-13a-power-distribution-outlet-with-13a-input-3m-cable",
      "price": "SGD 270.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b251f4048111.png",
      "galleryImages": [
        "/assets/vendor/file-b251f4048111.png",
        "/assets/vendor/file-d6da4fe5986b.png",
        "/assets/vendor/file-9a052abc710c.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-d6da4fe5986b.png",
      "productHref": "/product-page/tough-24-ways-13a-power-distribution-outlet-with-13a-input-3m-cable",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough 6 way PDU 32A UK 3PIN , input C Form 32A",
      "slug": "tough-6-way-pdu-32a-uk-3pin-input-c-form-32a",
      "price": "SGD 199.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-41c1c16de7d0.png",
      "galleryImages": [
        "/assets/vendor/file-41c1c16de7d0.png",
        "/assets/vendor/file-3acb3868ec1a.png",
        "/assets/vendor/file-45949183ef90.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-3acb3868ec1a.png",
      "productHref": "/product-page/tough-6-way-pdu-32a-uk-3pin-input-c-form-32a",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough  12 way PDU 32A UK 3Pin , input C Form 32A",
      "slug": "tough-12-ways-uk-circuit-breaker-power-socket-1",
      "price": "SGD 267.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-e16d1bba3e2d.png",
      "galleryImages": [
        "/assets/vendor/file-e16d1bba3e2d.png",
        "/assets/vendor/file-d7a24db376ce.png",
        "/assets/vendor/file-50cddaf35f94.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-d7a24db376ce.png",
      "productHref": "/product-page/tough-12-ways-uk-circuit-breaker-power-socket-1",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    }
  ],
  [
    {
      "title": "Tough vertical 8way IEC13 socket & 4way IEC19 socket with CE Approval",
      "slug": "tough-vertical-8way-iec13-socket-4way-iec19-socket-with-ce-approval",
      "price": "SGD 295.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-a0c64dcdc762.png",
      "galleryImages": [
        "/assets/vendor/file-a0c64dcdc762.png",
        "/assets/vendor/file-b2210236621b.png",
        "/assets/vendor/file-829693ce1b1a.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-b2210236621b.png",
      "productHref": "/product-page/tough-vertical-8way-iec13-socket-4way-iec19-socket-with-ce-approval",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough 13 Way 13A  250V 50/60Hz Power Distribution Outlet with CE Approval",
      "slug": "tough-tough-13-way-13a-250v-50-60hz-power-distribution-outlet-with-ce-approval",
      "price": "SGD 195.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-db2191bb4a89.png",
      "galleryImages": [
        "/assets/vendor/file-db2191bb4a89.png",
        "/assets/vendor/file-233e4d8c185e.png",
        "/assets/vendor/file-eb82ae8be535.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-233e4d8c185e.png",
      "productHref": "/product-page/tough-tough-13-way-13a-250v-50-60hz-power-distribution-outlet-with-ce-approval",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough PDU 12port UK socket output C Form",
      "slug": "tough-pdu-12port-uk-socket-output-c-form",
      "price": "SGD 185.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-fec22e62be97.png",
      "galleryImages": [
        "/assets/vendor/file-fec22e62be97.png",
        "/assets/vendor/file-7cf09e6cd49e.png",
        "/assets/vendor/file-4397cf5b15cd.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-7cf09e6cd49e.png",
      "productHref": "/product-page/tough-pdu-12port-uk-socket-output-c-form",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "ToughPDU 12port UK socket output A13",
      "slug": "pdu-12port-uk-socket-output-a13",
      "price": "SGD 175.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-83555bb7890d.png",
      "galleryImages": [
        "/assets/vendor/file-83555bb7890d.png",
        "/assets/vendor/file-14ebb931c54d.png",
        "/assets/vendor/file-b9fa30283979.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-14ebb931c54d.png",
      "productHref": "/product-page/pdu-12port-uk-socket-output-a13",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "HP EliteBook 640",
      "slug": "thinkpad-x1-carbon-gen-11-14-intel-i7",
      "price": "SGD 0.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-3b8e23bd74a9.jpg",
      "galleryImages": [
        "/assets/vendor/file-3b8e23bd74a9.jpg"
      ],
      "hoverImage": "/assets/vendor/file-3b8e23bd74a9.jpg",
      "productHref": "/product-page/thinkpad-x1-carbon-gen-11-14-intel-i7",
      "stock": "out",
      "sale": false,
      "quantity": false,
      "options": []
    },
    {
      "title": "Tough PDU 19inch 12port UK C13 Socket output A13",
      "slug": "tough-pdu-19inch-12port-uk-c13-socket-output-a13",
      "price": "SGD 198.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-739325fe921c.png",
      "galleryImages": [
        "/assets/vendor/file-739325fe921c.png",
        "/assets/vendor/file-156e7ea0622f.png",
        "/assets/vendor/file-b36b6590a6e0.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-156e7ea0622f.png",
      "productHref": "/product-page/tough-pdu-19inch-12port-uk-c13-socket-output-a13",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough PDU 19inch 10port UK C13 Socket output A13",
      "slug": "tough-pdu-19inch-10port-uk-c13-socket-output-a13",
      "price": "SGD 189.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-57a58c44da62.png",
      "galleryImages": [
        "/assets/vendor/file-57a58c44da62.png",
        "/assets/vendor/file-dbfcf4ebc0d6.png",
        "/assets/vendor/file-3488da2d469a.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-dbfcf4ebc0d6.png",
      "productHref": "/product-page/tough-pdu-19inch-10port-uk-c13-socket-output-a13",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough PDU 19inch 8port UK C13 socket output A13",
      "slug": "tough-pdu-19inch-8port-uk-c13-socket-output-a13",
      "price": "SGD 130.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-7413f11b5536.png",
      "galleryImages": [
        "/assets/vendor/file-7413f11b5536.png",
        "/assets/vendor/file-3d3cb7a167be.png",
        "/assets/vendor/file-1567d7dd0b75.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-3d3cb7a167be.png",
      "productHref": "/product-page/tough-pdu-19inch-8port-uk-c13-socket-output-a13",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough PDU 6port Universal with A13 plug",
      "slug": "tough-pdu-6port-universal-with-a13-plug",
      "price": "SGD 100.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-05919fc349bc.png",
      "galleryImages": [
        "/assets/vendor/file-05919fc349bc.png",
        "/assets/vendor/file-1d10eec1b8d5.png",
        "/assets/vendor/file-47294004ac94.png",
        "/assets/vendor/file-681ed06c3370.png"
      ],
      "hoverImage": "/assets/vendor/file-1d10eec1b8d5.png",
      "productHref": "/product-page/tough-pdu-6port-universal-with-a13-plug",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough PDU 19inch 6port  UK socket output C14",
      "slug": "tough-pdu-19inch-6port-uk-socket-output-c14",
      "price": "SGD 110.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-87afb9cfdd40.png",
      "galleryImages": [
        "/assets/vendor/file-87afb9cfdd40.png",
        "/assets/vendor/file-332b4a519a6e.png",
        "/assets/vendor/file-3143828da57f.png"
      ],
      "hoverImage": "/assets/vendor/file-332b4a519a6e.png",
      "productHref": "/product-page/tough-pdu-19inch-6port-uk-socket-output-c14",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough PDU 6 Way 13A 250V 50/60Hz Outlet with CE Approval c/w C13 plug",
      "slug": "tough-6-way-13a-250v-50-60hz-power-distribution-outlet-with-ce-approval-c-w-c13",
      "price": "SGD 110.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b0c5e11c527e.png",
      "galleryImages": [
        "/assets/vendor/file-b0c5e11c527e.png",
        "/assets/vendor/file-bde069df2a0c.png",
        "/assets/vendor/file-6534425b53c0.png"
      ],
      "hoverImage": "/assets/vendor/file-bde069df2a0c.png",
      "productHref": "/product-page/tough-6-way-13a-250v-50-60hz-power-distribution-outlet-with-ce-approval-c-w-c13",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Lenovo-ThinkPad E14 Gen 5 (14\" Intel)",
      "slug": "lenovo-thinkpad-e14-gen-5-14-intel",
      "price": "SGD 0.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-d9e5fae0469b.webp",
      "galleryImages": [
        "/assets/vendor/file-d9e5fae0469b.webp",
        "/assets/vendor/file-01d3a4181135.webp",
        "/assets/vendor/file-b358613e1c63.webp",
        "/assets/vendor/file-e3e1b2fda0c7.webp",
        "/assets/vendor/file-227eecedd8cf.webp"
      ],
      "hoverImage": "/assets/vendor/file-01d3a4181135.webp",
      "productHref": "/product-page/lenovo-thinkpad-e14-gen-5-14-intel",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Dell-Latitude 3440 Laptop - i5",
      "slug": "dell-latitude-3440-laptop",
      "price": "SGD 0.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-27afab3034d2.png",
      "galleryImages": [
        "/assets/vendor/file-27afab3034d2.png",
        "/assets/vendor/file-cd10f325af13.png",
        "/assets/vendor/file-d5d4a56fd973.png"
      ],
      "hoverImage": "/assets/vendor/file-cd10f325af13.png",
      "productHref": "/product-page/dell-latitude-3440-laptop",
      "stock": "out",
      "sale": false,
      "quantity": false,
      "options": []
    },
    {
      "title": "APC UPS Network Management Card 3 with Environmental Monitoring AP9641",
      "slug": "apc-ups-network-management-card-3-with-environmental-monitoring-ap9641",
      "price": "SGD 890.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-6a3072b4794c.jpg",
      "galleryImages": [
        "/assets/vendor/file-6a3072b4794c.jpg"
      ],
      "hoverImage": "/assets/vendor/file-6a3072b4794c.jpg",
      "productHref": "/product-page/apc-ups-network-management-card-3-with-environmental-monitoring-ap9641",
      "stock": "out",
      "sale": false,
      "quantity": false,
      "options": []
    },
    {
      "title": "APC Back-UPS Pro,BR1500GI",
      "slug": "apc-back-ups-pro-br1500gi-1500va-865w-tower-230v",
      "price": "SGD 797.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-e02631cb9f7d.jpg",
      "galleryImages": [
        "/assets/vendor/file-e02631cb9f7d.jpg"
      ],
      "hoverImage": "/assets/vendor/file-e02631cb9f7d.jpg",
      "productHref": "/product-page/apc-back-ups-pro-br1500gi-1500va-865w-tower-230v",
      "stock": "out",
      "sale": false,
      "quantity": false,
      "options": []
    },
    {
      "title": "Fixed Tray for Equipment Rack (1000mm)",
      "slug": "fixed-tray-for-equipment-rack-1000mm",
      "price": "SGD 125.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b55f3a35a851.jpg",
      "galleryImages": [
        "/assets/vendor/file-b55f3a35a851.jpg"
      ],
      "hoverImage": "/assets/vendor/file-b55f3a35a851.jpg",
      "productHref": "/product-page/fixed-tray-for-equipment-rack-1000mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black"
          ]
        }
      ]
    },
    {
      "title": "BR650MI",
      "slug": "br650mi",
      "price": "SGD 330.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-c83bbba45380.jpg",
      "galleryImages": [
        "/assets/vendor/file-c83bbba45380.jpg",
        "/assets/vendor/file-536042c22263.jpg"
      ],
      "hoverImage": "/assets/vendor/file-536042c22263.jpg",
      "productHref": "/product-page/br650mi",
      "stock": "out",
      "sale": false,
      "quantity": false,
      "options": []
    },
    {
      "title": "SRV2KI",
      "slug": "srv2ki",
      "price": "SGD 1,100.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-da31b0b6cb41.jpg",
      "galleryImages": [
        "/assets/vendor/file-da31b0b6cb41.jpg",
        "/assets/vendor/file-250ea81980dd.jpg",
        "/assets/vendor/file-67377d4e49b0.jpg"
      ],
      "hoverImage": "/assets/vendor/file-250ea81980dd.jpg",
      "productHref": "/product-page/srv2ki",
      "stock": "out",
      "ribbon": "BEST SELLER",
      "sale": true,
      "quantity": false,
      "options": []
    },
    {
      "title": "APC Smart-UPS RT SURTRK2 -19\" Rail Kit for Smart-UPS RT",
      "slug": "apc-smart-ups-rt-surtrk2-19-rail-kit-for-smart-ups-rt",
      "price": "SGD 485.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-a178cfcd336a.jpg",
      "galleryImages": [
        "/assets/vendor/file-a178cfcd336a.jpg",
        "/assets/vendor/file-a5f407ee725b.jpg",
        "/assets/vendor/file-959b1e60db63.jpg"
      ],
      "hoverImage": "/assets/vendor/file-a5f407ee725b.jpg",
      "productHref": "/product-page/apc-smart-ups-rt-surtrk2-19-rail-kit-for-smart-ups-rt",
      "stock": "out",
      "sale": false,
      "quantity": false,
      "options": []
    },
    {
      "title": "APC Smart-UPS SURT1000XLIM  1000VA 230-Marine",
      "slug": "apc-smart-ups-surt1000xlim-1000va-230-marine",
      "price": "SGD 2,480.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-a5f407ee725b.jpg",
      "galleryImages": [
        "/assets/vendor/file-a5f407ee725b.jpg",
        "/assets/vendor/file-959b1e60db63.jpg",
        "/assets/vendor/file-c9efbf608b37.jpg"
      ],
      "hoverImage": "/assets/vendor/file-959b1e60db63.jpg",
      "productHref": "/product-page/apc-smart-ups-surt1000xlim-1000va-230-marine",
      "stock": "out",
      "ribbon": "Marine-Grade",
      "sale": true,
      "quantity": false,
      "options": []
    },
    {
      "title": "Synology FlashStation FS2500",
      "slug": "synology-flashstation-fs2500",
      "price": "SGD 6,100.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-601615809928.jpg",
      "galleryImages": [
        "/assets/vendor/file-601615809928.jpg",
        "/assets/vendor/file-f4cb499e294a.jpg",
        "/assets/vendor/file-125028a9a406.jpg",
        "/assets/vendor/file-f37528b0ef2b.jpg",
        "/assets/vendor/file-5c44cc5154ee.jpg",
        "/assets/vendor/file-4a1808674a86.jpg",
        "/assets/vendor/file-45ec9da58a7a.jpg",
        "/assets/vendor/file-391d2e9c7c0f.jpg",
        "/assets/vendor/file-b4f3b4eba44b.png"
      ],
      "hoverImage": "/assets/vendor/file-f4cb499e294a.jpg",
      "productHref": "/product-page/synology-flashstation-fs2500",
      "stock": "in",
      "ribbon": "RM-Businesses",
      "sale": true,
      "quantity": true,
      "options": [
        {
          "name": "Sliding Rail Kit",
          "values": [
            "None",
            "RKS-01",
            "RKS-02"
          ]
        }
      ]
    },
    {
      "title": "Synology RackStation Synology  RS822+",
      "slug": "synology-rackstation-synology-rs822",
      "price": "SGD 1,826.92",
      "comparePrice": "",
      "image": "/assets/vendor/file-415cdd289d9a.jpg",
      "galleryImages": [
        "/assets/vendor/file-415cdd289d9a.jpg",
        "/assets/vendor/file-3ea6486c18fb.jpg",
        "/assets/vendor/file-6ef1434f6fba.jpg",
        "/assets/vendor/file-e4c132a093ad.jpg",
        "/assets/vendor/file-013047438fa7.jpg",
        "/assets/vendor/file-d75bc1e603f1.jpg",
        "/assets/vendor/file-5354e084e2d2.jpg"
      ],
      "hoverImage": "/assets/vendor/file-3ea6486c18fb.jpg",
      "productHref": "/product-page/synology-rackstation-synology-rs822",
      "stock": "in",
      "ribbon": "RM-small sized businesses",
      "sale": true,
      "quantity": true,
      "options": [
        {
          "name": "Sliding Rail Kit",
          "values": [
            "None",
            "RKS-01",
            "RKS-02"
          ]
        }
      ]
    },
    {
      "title": "Synology RackStation RS3621RPxs",
      "slug": "synology-rackstation-rs822",
      "price": "SGD 5,822.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-bd5a52759957.jpg",
      "galleryImages": [
        "/assets/vendor/file-bd5a52759957.jpg",
        "/assets/vendor/file-2ce901d0e05b.jpg",
        "/assets/vendor/file-76965f223f1c.jpg",
        "/assets/vendor/file-db132a2fa135.jpg",
        "/assets/vendor/file-39647a646726.jpg"
      ],
      "hoverImage": "/assets/vendor/file-2ce901d0e05b.jpg",
      "productHref": "/product-page/synology-rackstation-rs822",
      "stock": "in",
      "ribbon": "RM-High Efficient",
      "sale": true,
      "quantity": true,
      "options": [
        {
          "name": "Sliding Rail Kit",
          "values": [
            "None",
            "RKS-01",
            "RKS-02"
          ]
        }
      ]
    },
    {
      "title": "Synology RackStation RS2423RP+",
      "slug": "synology-rackstation-rs2423rp",
      "price": "SGD 4,050.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-9811c1853098.jpg",
      "galleryImages": [
        "/assets/vendor/file-9811c1853098.jpg",
        "/assets/vendor/file-08f0119af1dd.jpg",
        "/assets/vendor/file-7677ba73fa03.jpg",
        "/assets/vendor/file-b2b27227446f.jpg",
        "/assets/vendor/file-d208edddf222.jpg",
        "/assets/vendor/file-d0947f79de24.jpg"
      ],
      "hoverImage": "/assets/vendor/file-08f0119af1dd.jpg",
      "productHref": "/product-page/synology-rackstation-rs2423rp",
      "stock": "in",
      "ribbon": "RM-High Efficient",
      "sale": true,
      "quantity": true,
      "options": [
        {
          "name": "Sliding Rail Kit",
          "values": [
            "None",
            "RKS-01",
            "RKS-02"
          ]
        }
      ]
    }
  ],
  [
    {
      "title": "APC-BK500EI",
      "slug": "apc-bk500eiapc-back-ups-500va-300w-tower-230v-4x-iec-c13-outlets",
      "price": "SGD 289.00",
      "comparePrice": "SGD 279.00",
      "image": "/assets/vendor/file-c493c9f02507.jpg",
      "galleryImages": [
        "/assets/vendor/file-c493c9f02507.jpg",
        "/assets/vendor/file-cb952e872fe1.jpg",
        "/assets/vendor/file-f7fdc2205dda.jpg",
        "/assets/vendor/file-acf62423b3da.jpg"
      ],
      "hoverImage": "/assets/vendor/file-cb952e872fe1.jpg",
      "productHref": "/product-page/apc-bk500eiapc-back-ups-500va-300w-tower-230v-4x-iec-c13-outlets",
      "stock": "in",
      "ribbon": "Entry-level",
      "sale": true,
      "quantity": true,
      "options": []
    },
    {
      "title": "SRV1KI-E",
      "slug": "apc-easyups-on-line-srv1ki-e-1000va-900w-tower-230v-3xiecc13outlets",
      "price": "SGD 655.00",
      "comparePrice": "SGD 635.00",
      "image": "/assets/vendor/file-1bdd616d935e.jpg",
      "galleryImages": [
        "/assets/vendor/file-1bdd616d935e.jpg",
        "/assets/vendor/file-a737c32b3aed.jpg",
        "/assets/vendor/file-a63ca1039a8b.jpg"
      ],
      "hoverImage": "/assets/vendor/file-a737c32b3aed.jpg",
      "productHref": "/product-page/apc-easyups-on-line-srv1ki-e-1000va-900w-tower-230v-3xiecc13outlets",
      "stock": "out",
      "ribbon": "Recommended",
      "sale": true,
      "quantity": false,
      "options": []
    },
    {
      "title": "Lenovo-ThinkPad T14s Gen3 ADL: 14\" WUXGA (1920x1200) IPS 300nits Anti-glare",
      "slug": "thinkpad-t14s-gen3-adl-14-wuxga-1920x1200-ips-300nits-anti-glare",
      "price": "SGD 2,579.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-3f5fd0bbb831.webp",
      "galleryImages": [
        "/assets/vendor/file-3f5fd0bbb831.webp",
        "/assets/vendor/file-76c397e054b0.webp",
        "/assets/vendor/file-d82318564cd4.webp",
        "/assets/vendor/file-f2e68f33abae.webp",
        "/assets/vendor/file-09719bcdf3ed.webp",
        "/assets/vendor/file-f65e53c7f7c6.webp",
        "/assets/vendor/file-fece8d954dd1.webp",
        "/assets/vendor/file-6912c65c0b13.webp",
        "/assets/vendor/file-ae83583bf9e5.webp",
        "/assets/vendor/file-1bd99c8e0546.webp",
        "/assets/vendor/file-a9103a0a1c7e.webp",
        "/assets/vendor/file-3a1ae286e7e4.webp",
        "/assets/vendor/file-b32ba4ab7e33.jpg"
      ],
      "hoverImage": "/assets/vendor/file-76c397e054b0.webp",
      "productHref": "/product-page/thinkpad-t14s-gen3-adl-14-wuxga-1920x1200-ips-300nits-anti-glare",
      "stock": "in",
      "ribbon": "New",
      "sale": true,
      "quantity": true,
      "options": []
    },
    {
      "title": "SMC1500IC-APC Smart-UPS, Line Interactive, 1500VA, Tower, 230V",
      "slug": "apc-smart-ups-line-interactive-750va-tower-230v-6x-iec-c13-outlets-smartco",
      "price": "SGD 1,068.00",
      "comparePrice": "SGD 960.00",
      "image": "/assets/vendor/file-e9000339fe8f.jpg",
      "galleryImages": [
        "/assets/vendor/file-e9000339fe8f.jpg",
        "/assets/vendor/file-3841e1d54915.jpg",
        "/assets/vendor/file-b01b369bcd9e.jpg",
        "/assets/vendor/file-83831fc2f2ee.jpg"
      ],
      "hoverImage": "/assets/vendor/file-3841e1d54915.jpg",
      "productHref": "/product-page/apc-smart-ups-line-interactive-750va-tower-230v-6x-iec-c13-outlets-smartco",
      "stock": "out",
      "ribbon": "PROMOTION",
      "sale": true,
      "quantity": false,
      "options": []
    },
    {
      "title": "BX625CI-MS",
      "slug": "apc-back-ups-625va-230v-avr-floor-3-universal-outlets-bx625ci-ms",
      "price": "SGD 135.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-7b72b7fe24ab.jpg",
      "galleryImages": [
        "/assets/vendor/file-7b72b7fe24ab.jpg",
        "/assets/vendor/file-533bcd7838d2.jpg"
      ],
      "hoverImage": "/assets/vendor/file-533bcd7838d2.jpg",
      "productHref": "/product-page/apc-back-ups-625va-230v-avr-floor-3-universal-outlets-bx625ci-ms",
      "stock": "in",
      "ribbon": "Fast-Moving",
      "sale": true,
      "quantity": true,
      "options": []
    },
    {
      "title": "TOUGH - Laptop/tablet charging Cart",
      "slug": "laptop-tablet-charging-cart",
      "price": "SGD 3,299.00",
      "comparePrice": "SGD 3,099.00",
      "image": "/assets/vendor/file-c34ff04b0ceb.png",
      "galleryImages": [
        "/assets/vendor/file-c34ff04b0ceb.png",
        "/assets/vendor/file-0b8735b50cba.png",
        "/assets/vendor/file-0c724b255e7f.png",
        "/assets/vendor/file-df5bffe01c36.png",
        "/assets/vendor/file-aecd7c8da191.png"
      ],
      "hoverImage": "/assets/vendor/file-0b8735b50cba.png",
      "productHref": "/product-page/laptop-tablet-charging-cart",
      "stock": "in",
      "ribbon": "Fast-Moving",
      "sale": true,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Electric Adjustable Desk",
      "slug": "electric-adjustable-desk",
      "price": "SGD 199.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-e7549ba37b1b.jpg",
      "galleryImages": [
        "/assets/vendor/file-e7549ba37b1b.jpg",
        "/assets/vendor/file-93dbbd01f0be.jpg",
        "/assets/vendor/file-d65fcc5f2636.jpg",
        "/assets/vendor/file-74e6ed20f4b4.jpg",
        "/assets/vendor/file-0a12dd914df2.jpg"
      ],
      "hoverImage": "/assets/vendor/file-93dbbd01f0be.jpg",
      "productHref": "/product-page/electric-adjustable-desk",
      "stock": "in",
      "ribbon": "6.6 - Flash^Sale",
      "sale": true,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Charging Tablet Trolley Cart",
      "slug": "charging-tablet-trolley-cart",
      "price": "SGD 1,699.00",
      "comparePrice": "SGD 1,599.00",
      "image": "/assets/vendor/file-ccac2c41946d.jpg",
      "galleryImages": [
        "/assets/vendor/file-ccac2c41946d.jpg"
      ],
      "hoverImage": "/assets/vendor/file-ccac2c41946d.jpg",
      "productHref": "/product-page/charging-tablet-trolley-cart",
      "stock": "in",
      "sale": true,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Sliding Tray for Equipment Rack -",
      "slug": "sliding-tray-for-equipment-rack",
      "price": "SGD 88.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-12426d50ab1d.jpg",
      "galleryImages": [
        "/assets/vendor/file-12426d50ab1d.jpg"
      ],
      "hoverImage": "/assets/vendor/file-12426d50ab1d.jpg",
      "productHref": "/product-page/sliding-tray-for-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough Server Rack Fan Tray with 4-Ventilation Fans",
      "slug": "tough-server-rack-fan-tray-with-4-ventilation-fans",
      "price": "SGD 249.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-685c068d4723.jpg",
      "galleryImages": [
        "/assets/vendor/file-685c068d4723.jpg"
      ],
      "hoverImage": "/assets/vendor/file-685c068d4723.jpg",
      "productHref": "/product-page/tough-server-rack-fan-tray-with-4-ventilation-fans",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        },
        {
          "name": "Dimension",
          "values": [
            "1000mm",
            "600mm",
            "800mm"
          ]
        }
      ]
    },
    {
      "title": "Serve Rack Castor Wheel (4pcsset)",
      "slug": "serve-rack-castor-wheel-4pcsset",
      "price": "SGD 122.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-59ceca5d53db.jpg",
      "galleryImages": [
        "/assets/vendor/file-59ceca5d53db.jpg"
      ],
      "hoverImage": "/assets/vendor/file-59ceca5d53db.jpg",
      "productHref": "/product-page/serve-rack-castor-wheel-4pcsset",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "M6 Screw with washer & Cage Nuts",
      "slug": "m6-screw-with-washer-cage-nuts",
      "price": "SGD 40.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-9ab83073ef36.jpg",
      "galleryImages": [
        "/assets/vendor/file-9ab83073ef36.jpg"
      ],
      "hoverImage": "/assets/vendor/file-9ab83073ef36.jpg",
      "productHref": "/product-page/m6-screw-with-washer-cage-nuts",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Keyboard Tray for Equipment Rack",
      "slug": "keyboard-tray-for-equipment-rack",
      "price": "SGD 100.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-ff5607ee1fa6.jpg",
      "galleryImages": [
        "/assets/vendor/file-ff5607ee1fa6.jpg"
      ],
      "hoverImage": "/assets/vendor/file-ff5607ee1fa6.jpg",
      "productHref": "/product-page/keyboard-tray-for-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Fixed Tray for Size 600(D)mm Double Section Wall Mount",
      "slug": "fixed-tray-for-size-600-d-mm-double-section-wall-mount",
      "price": "SGD 75.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b55f3a35a851.jpg",
      "galleryImages": [
        "/assets/vendor/file-b55f3a35a851.jpg"
      ],
      "hoverImage": "/assets/vendor/file-b55f3a35a851.jpg",
      "productHref": "/product-page/fixed-tray-for-size-600-d-mm-double-section-wall-mount",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Fixed Tray for Equipment Rack for Wall Mount",
      "slug": "fixed-tray-for-equipment-rack-for-wall-mount",
      "price": "SGD 65.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b55f3a35a851.jpg",
      "galleryImages": [
        "/assets/vendor/file-b55f3a35a851.jpg"
      ],
      "hoverImage": "/assets/vendor/file-b55f3a35a851.jpg",
      "productHref": "/product-page/fixed-tray-for-equipment-rack-for-wall-mount",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Fixed Tray for Equipment Rack (600mm)",
      "slug": "fixed-tray-for-equipment-rack",
      "price": "SGD 75.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b55f3a35a851.jpg",
      "galleryImages": [
        "/assets/vendor/file-b55f3a35a851.jpg"
      ],
      "hoverImage": "/assets/vendor/file-b55f3a35a851.jpg",
      "productHref": "/product-page/fixed-tray-for-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Cat6A 24 UTP Port Patch Panel for Cat6 Patch Cord",
      "slug": "cat6a-24-utp-port-patch-panel-for-cat6-patch-cord",
      "price": "SGD 165.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-9c70fd4d05b3.jpg",
      "galleryImages": [
        "/assets/vendor/file-9c70fd4d05b3.jpg",
        "/assets/vendor/file-e28c8c26c35b.jpg",
        "/assets/vendor/file-1c98dde8a31d.jpg"
      ],
      "hoverImage": "/assets/vendor/file-e28c8c26c35b.jpg",
      "productHref": "/product-page/cat6a-24-utp-port-patch-panel-for-cat6-patch-cord",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Cat.5e UTP 24 Port Patch Panel for Cat.5e Patch Cord",
      "slug": "cat-5e-utp-24-port-patch-panel-for-cat-5e-patch-cord",
      "price": "SGD 58.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-46df92a7de28.jpg",
      "galleryImages": [
        "/assets/vendor/file-46df92a7de28.jpg"
      ],
      "hoverImage": "/assets/vendor/file-46df92a7de28.jpg",
      "productHref": "/product-page/cat-5e-utp-24-port-patch-panel-for-cat-5e-patch-cord",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Cat.5e FTP 24 Port Patch Panel for Cat.5e Patch Cord",
      "slug": "cat-5e-ftp-24-port-patch-panel-for-cat-5e-patch-cord",
      "price": "SGD 79.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-1212f6407c1b.jpg",
      "galleryImages": [
        "/assets/vendor/file-1212f6407c1b.jpg"
      ],
      "hoverImage": "/assets/vendor/file-1212f6407c1b.jpg",
      "productHref": "/product-page/cat-5e-ftp-24-port-patch-panel-for-cat-5e-patch-cord",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Cat.5e 48 Port Patch Panel for Cat.5e Patch Cord",
      "slug": "cat-5e-48-port-patch-panel-for-cat-5e-patch-cord",
      "price": "SGD 99.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-a3944436eec7.jpg",
      "galleryImages": [
        "/assets/vendor/file-a3944436eec7.jpg"
      ],
      "hoverImage": "/assets/vendor/file-a3944436eec7.jpg",
      "productHref": "/product-page/cat-5e-48-port-patch-panel-for-cat-5e-patch-cord",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "19鈥?1U Brush Panel",
      "slug": "19-1u-brush-panel",
      "price": "SGD 30.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-680020136791.jpg",
      "galleryImages": [
        "/assets/vendor/file-680020136791.jpg"
      ],
      "hoverImage": "/assets/vendor/file-680020136791.jpg",
      "productHref": "/product-page/19-1u-brush-panel",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Stereo PC Headset.",
      "slug": "stereo-pc-headset",
      "price": "SGD 19.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-f297d5fa06ea.jpg",
      "galleryImages": [
        "/assets/vendor/file-f297d5fa06ea.jpg"
      ],
      "hoverImage": "/assets/vendor/file-f297d5fa06ea.jpg",
      "productHref": "/product-page/stereo-pc-headset",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black"
          ]
        }
      ]
    },
    {
      "title": "Multimedia Mini Keyboard SilverBlack with USB Cable (BlackSilver)",
      "slug": "multimedia-mini-keyboard-silverblack-with-usb-cable-blacksilver",
      "price": "SGD 26.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-2c3f8525749c.jpg",
      "galleryImages": [
        "/assets/vendor/file-2c3f8525749c.jpg"
      ],
      "hoverImage": "/assets/vendor/file-2c3f8525749c.jpg",
      "productHref": "/product-page/multimedia-mini-keyboard-silverblack-with-usb-cable-blacksilver",
      "stock": "in",
      "ribbon": "Fast-Moving",
      "sale": true,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Mini Keyboard with TrackBall - PS2 Cable (Black)",
      "slug": "mini-keyboard-with-trackball-ps2-cable-black",
      "price": "SGD 99.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-06b5d331d436.jpg",
      "galleryImages": [
        "/assets/vendor/file-06b5d331d436.jpg"
      ],
      "hoverImage": "/assets/vendor/file-06b5d331d436.jpg",
      "productHref": "/product-page/mini-keyboard-with-trackball-ps2-cable-black",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    }
  ],
  [
    {
      "title": "Mini Keyboard with Touch Pad - PS2 Cable (Black)",
      "slug": "mini-keyboard-with-touch-pad-ps2-cable-black",
      "price": "SGD 78.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-3922c1d32b0b.jpg",
      "galleryImages": [
        "/assets/vendor/file-3922c1d32b0b.jpg"
      ],
      "hoverImage": "/assets/vendor/file-3922c1d32b0b.jpg",
      "productHref": "/product-page/mini-keyboard-with-touch-pad-ps2-cable-black",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Adjustable Bracket for LCD Monitor - 100mm x 100mm",
      "slug": "adjustable-bracket-for-lcd-monitor-100mm-x-100mm",
      "price": "SGD 30.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-96c55406981a.jpg",
      "galleryImages": [
        "/assets/vendor/file-96c55406981a.jpg"
      ],
      "hoverImage": "/assets/vendor/file-96c55406981a.jpg",
      "productHref": "/product-page/adjustable-bracket-for-lcd-monitor-100mm-x-100mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "4-digits Dual-Mechanism Computer Security Lock for Notebook",
      "slug": "4-digits-dual-mechanism-computer-security-lock-for-notebook",
      "price": "SGD 33.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b43f8d35877e.jpg",
      "galleryImages": [
        "/assets/vendor/file-b43f8d35877e.jpg"
      ],
      "hoverImage": "/assets/vendor/file-b43f8d35877e.jpg",
      "productHref": "/product-page/4-digits-dual-mechanism-computer-security-lock-for-notebook",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "3D Scroll Optical Mouse 800dpi-Extendable USB Cable - Black or Silver",
      "slug": "3d-scroll-optical-mouse-800dpi-extendable-usb-cable-black-or-silver",
      "price": "SGD 18.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-a28ec020f838.jpg",
      "galleryImages": [
        "/assets/vendor/file-a28ec020f838.jpg"
      ],
      "hoverImage": "/assets/vendor/file-a28ec020f838.jpg",
      "productHref": "/product-page/3d-scroll-optical-mouse-800dpi-extendable-usb-cable-black-or-silver",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "3D Scroll Optical Mouse 800dpi USB Cable - BlackSilver",
      "slug": "3d-scroll-optical-mouse-800dpi-usb-cable-blacksilver",
      "price": "SGD 18.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-11013437ee64.jpg",
      "galleryImages": [
        "/assets/vendor/file-11013437ee64.jpg"
      ],
      "hoverImage": "/assets/vendor/file-11013437ee64.jpg",
      "productHref": "/product-page/3d-scroll-optical-mouse-800dpi-usb-cable-blacksilver",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "3D Scroll Optical Mouse 800dpi USB Cable - Black",
      "slug": "3d-scroll-optical-mouse-800dpi-usb-cable-black",
      "price": "SGD 16.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-a2ba637353b7.jpg",
      "galleryImages": [
        "/assets/vendor/file-a2ba637353b7.jpg"
      ],
      "hoverImage": "/assets/vendor/file-a2ba637353b7.jpg",
      "productHref": "/product-page/3d-scroll-optical-mouse-800dpi-usb-cable-black",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "3D Scroll Optical Mouse 800dpi PS2 Cable - Black",
      "slug": "3d-scroll-optical-mouse-800dpi-ps2-cable-black",
      "price": "SGD 16.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-0c321cf8a7db.jpg",
      "galleryImages": [
        "/assets/vendor/file-0c321cf8a7db.jpg"
      ],
      "hoverImage": "/assets/vendor/file-0c321cf8a7db.jpg",
      "productHref": "/product-page/3d-scroll-optical-mouse-800dpi-ps2-cable-black",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "2.4GHz Wireless Optical Mouse - Black or White",
      "slug": "2-4ghz-wireless-optical-mouse-black-or-white",
      "price": "SGD 18.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-e880946fa596.jpg",
      "galleryImages": [
        "/assets/vendor/file-e880946fa596.jpg",
        "/assets/vendor/file-b62f710a9650.jpg"
      ],
      "hoverImage": "/assets/vendor/file-b62f710a9650.jpg",
      "productHref": "/product-page/2-4ghz-wireless-optical-mouse-black-or-white",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Qrush 104Keys Keyboard with USB Cable",
      "slug": "qrush-104keys-keyboard-with-usb-cable",
      "price": "SGD 18.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-ea18d09bae14.jpg",
      "galleryImages": [
        "/assets/vendor/file-ea18d09bae14.jpg"
      ],
      "hoverImage": "/assets/vendor/file-ea18d09bae14.jpg",
      "productHref": "/product-page/qrush-104keys-keyboard-with-usb-cable",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Qrush-Computer/Notebook Number Lock-Black Cable 4-Digits",
      "slug": "qrush-computer-notebook-number-lock-black-cable-4-digits",
      "price": "SGD 25.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-8530d084e337.jpg",
      "galleryImages": [
        "/assets/vendor/file-8530d084e337.jpg"
      ],
      "hoverImage": "/assets/vendor/file-8530d084e337.jpg",
      "productHref": "/product-page/qrush-computer-notebook-number-lock-black-cable-4-digits",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "USB KVM Switch Cable (Compatible for Aten switch CS-1708 & CS-1716) - 1.8meter",
      "slug": "usb-kvm-switch-cable-compatible-for-aten-switch-cs-1708-cs-1716-1-8meter",
      "price": "SGD 22.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-63e56455e7a2.jpg",
      "galleryImages": [
        "/assets/vendor/file-63e56455e7a2.jpg"
      ],
      "hoverImage": "/assets/vendor/file-63e56455e7a2.jpg",
      "productHref": "/product-page/usb-kvm-switch-cable-compatible-for-aten-switch-cs-1708-cs-1716-1-8meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough VGA(RGB) Cable (FM) or (MM) - 1.8 meter",
      "slug": "tough-vga-rgb-cable-fm-or-mm-1-8-meter",
      "price": "SGD 11.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-faa368536875.jpg",
      "galleryImages": [
        "/assets/vendor/file-faa368536875.jpg"
      ],
      "hoverImage": "/assets/vendor/file-faa368536875.jpg",
      "productHref": "/product-page/tough-vga-rgb-cable-fm-or-mm-1-8-meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough USB3.0 to VGA Display Adapter",
      "slug": "tough-usb3-0-to-vga-display-adapter",
      "price": "SGD 109.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-8966f290e587.jpg",
      "galleryImages": [
        "/assets/vendor/file-8966f290e587.jpg"
      ],
      "hoverImage": "/assets/vendor/file-8966f290e587.jpg",
      "productHref": "/product-page/tough-usb3-0-to-vga-display-adapter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough USB3.0 to SATA Hard Drive Adapter",
      "slug": "tough-usb3-0-to-sata-hard-drive-adapter",
      "price": "SGD 50.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-746d0249bcf2.jpg",
      "galleryImages": [
        "/assets/vendor/file-746d0249bcf2.jpg"
      ],
      "hoverImage": "/assets/vendor/file-746d0249bcf2.jpg",
      "productHref": "/product-page/tough-usb3-0-to-sata-hard-drive-adapter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough USB2.0 to IDE & SATA Adapter",
      "slug": "tough-usb2-0-to-ide-sata-adapter",
      "price": "SGD 35.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-e6299e158a59.jpg",
      "galleryImages": [
        "/assets/vendor/file-e6299e158a59.jpg"
      ],
      "hoverImage": "/assets/vendor/file-e6299e158a59.jpg",
      "productHref": "/product-page/tough-usb2-0-to-ide-sata-adapter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough USB to TTL Serial Cable (3.3V) 3.5mm Audio Jack 鈥?1.8m",
      "slug": "tough-usb-to-ttl-serial-cable-3-3v-3-5mm-audio-jack-1-8m",
      "price": "SGD 22.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-253816f9690e.jpg",
      "galleryImages": [
        "/assets/vendor/file-253816f9690e.jpg"
      ],
      "hoverImage": "/assets/vendor/file-253816f9690e.jpg",
      "productHref": "/product-page/tough-usb-to-ttl-serial-cable-3-3v-3-5mm-audio-jack-1-8m",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough USB to PS2 Converter",
      "slug": "tough-usb-to-ps2-converter",
      "price": "SGD 8.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-02549a1d57ad.jpg",
      "galleryImages": [
        "/assets/vendor/file-02549a1d57ad.jpg"
      ],
      "hoverImage": "/assets/vendor/file-02549a1d57ad.jpg",
      "productHref": "/product-page/tough-usb-to-ps2-converter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough USB to PS/2 \"Y\" Cable (USB2.0/ 2x PS/2)",
      "slug": "tough-usb-to-ps-2-y-cable-usb2-0-2x-ps-2",
      "price": "SGD 18.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-00ad6517be57.jpg",
      "galleryImages": [
        "/assets/vendor/file-00ad6517be57.jpg"
      ],
      "hoverImage": "/assets/vendor/file-00ad6517be57.jpg",
      "productHref": "/product-page/tough-usb-to-ps-2-y-cable-usb2-0-2x-ps-2",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough USB to DB9(RS232) Adapter - 1.2 meter",
      "slug": "tough-usb-to-db9-rs232-adapter-1-2-meter",
      "price": "SGD 33.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-935ead93f371.jpg",
      "galleryImages": [
        "/assets/vendor/file-935ead93f371.jpg"
      ],
      "hoverImage": "/assets/vendor/file-935ead93f371.jpg",
      "productHref": "/product-page/tough-usb-to-db9-rs232-adapter-1-2-meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough USB 3.0 to SATA Adapter",
      "slug": "tough-usb-3-0-to-sata-adapter",
      "price": "SGD 40.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-3ae7ca532ab4.jpg",
      "galleryImages": [
        "/assets/vendor/file-3ae7ca532ab4.jpg"
      ],
      "hoverImage": "/assets/vendor/file-3ae7ca532ab4.jpg",
      "productHref": "/product-page/tough-usb-3-0-to-sata-adapter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough USB 2.0 to VGA Port Adapter",
      "slug": "tough-usb-2-0-to-vga-port-adapter",
      "price": "SGD 99.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-6935f5b68777.jpg",
      "galleryImages": [
        "/assets/vendor/file-6935f5b68777.jpg"
      ],
      "hoverImage": "/assets/vendor/file-6935f5b68777.jpg",
      "productHref": "/product-page/tough-usb-2-0-to-vga-port-adapter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough UK 3pin to Figure 8 Power Cable鈥?.5meter",
      "slug": "tough-uk-3pin-to-figure-8-power-cable-1-5meter",
      "price": "SGD 8.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-56031e8cc573.jpg",
      "galleryImages": [
        "/assets/vendor/file-56031e8cc573.jpg"
      ],
      "hoverImage": "/assets/vendor/file-56031e8cc573.jpg",
      "productHref": "/product-page/tough-uk-3pin-to-figure-8-power-cable-1-5meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough UK 3Pin L Power Cord 鈥?1.8meter",
      "slug": "tough-uk-3pin-l-power-cord-1-8meter",
      "price": "SGD 12.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-2f809f8e9ed4.jpg",
      "galleryImages": [
        "/assets/vendor/file-2f809f8e9ed4.jpg"
      ],
      "hoverImage": "/assets/vendor/file-2f809f8e9ed4.jpg",
      "productHref": "/product-page/tough-uk-3pin-l-power-cord-1-8meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Lightning cable to ethernet adapter suitable for ipad,iphone",
      "slug": "lightning-cable-to-ethernet-adapter-suitable-for-ipad-iphone",
      "price": "SGD 50.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-fe03a9ef3170.png",
      "galleryImages": [
        "/assets/vendor/file-fe03a9ef3170.png",
        "/assets/vendor/file-a28a9f908607.png",
        "/assets/vendor/file-d8d7d53dfaa2.png",
        "/assets/vendor/file-1136645b3b04.png",
        "/assets/vendor/file-17e9738c04d4.png"
      ],
      "hoverImage": "/assets/vendor/file-a28a9f908607.png",
      "productHref": "/product-page/lightning-cable-to-ethernet-adapter-suitable-for-ipad-iphone",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    }
  ],
  [
    {
      "title": "KVM Cable - VGA+MOS+KB to VGA+MOS+KB - 2 meter",
      "slug": "kvm-cable-vga-mos-kb-to-vga-mos-kb-2-meter",
      "price": "SGD 25.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-4a988688f17e.jpg",
      "galleryImages": [
        "/assets/vendor/file-4a988688f17e.jpg"
      ],
      "hoverImage": "/assets/vendor/file-4a988688f17e.jpg",
      "productHref": "/product-page/kvm-cable-vga-mos-kb-to-vga-mos-kb-2-meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "KVM Switch Cables (Monitor MF, PS2 MM) or (Monitor & PS2 MF) - 1.8meter",
      "slug": "kvm-switch-cables-monitor-mf-ps2-mm-or-monitor-ps2-mf-1-8meter",
      "price": "SGD 20.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-9a69d850ab6c.jpg",
      "galleryImages": [
        "/assets/vendor/file-9a69d850ab6c.jpg"
      ],
      "hoverImage": "/assets/vendor/file-9a69d850ab6c.jpg",
      "productHref": "/product-page/kvm-switch-cables-monitor-mf-ps2-mm-or-monitor-ps2-mf-1-8meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "IEC60320-C19 to IEC-60309(16A) Power Cable - 3meter",
      "slug": "iec60320-c19-to-iec-60309-16a-power-cable-3meter",
      "price": "SGD 52.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-4c737c19276d.jpg",
      "galleryImages": [
        "/assets/vendor/file-4c737c19276d.jpg",
        "/assets/vendor/file-35b6404c0d85.jpg"
      ],
      "hoverImage": "/assets/vendor/file-35b6404c0d85.jpg",
      "productHref": "/product-page/iec60320-c19-to-iec-60309-16a-power-cable-3meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "HDMI ( Male ) to VGA ( Female) Adapter",
      "slug": "hdmi-male-to-vga-female-adapter",
      "price": "SGD 75.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-15b0291dcde1.jpg",
      "galleryImages": [
        "/assets/vendor/file-15b0291dcde1.jpg"
      ],
      "hoverImage": "/assets/vendor/file-15b0291dcde1.jpg",
      "productHref": "/product-page/hdmi-male-to-vga-female-adapter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "European Power Cord - IEC-320-C13 to SCHUKO CEE 7/7 - \"L\" Shaped -1.5meter",
      "slug": "european-power-cord-iec-320-c13-to-schuko-cee-7-7-l-shaped-1-5meter",
      "price": "SGD 14.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-9bc089fd304f.jpg",
      "galleryImages": [
        "/assets/vendor/file-9bc089fd304f.jpg",
        "/assets/vendor/file-4cfec3fcb2eb.jpg",
        "/assets/vendor/file-3bc7f06b28cc.jpg"
      ],
      "hoverImage": "/assets/vendor/file-4cfec3fcb2eb.jpg",
      "productHref": "/product-page/european-power-cord-iec-320-c13-to-schuko-cee-7-7-l-shaped-1-5meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "HDMI-HDMI V1.3 Cable - 1.8meter",
      "slug": "hdmi-hdmi-v1-3-cable-1-8meter",
      "price": "SGD 18.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-77eb4747f509.jpg",
      "galleryImages": [
        "/assets/vendor/file-77eb4747f509.jpg"
      ],
      "hoverImage": "/assets/vendor/file-77eb4747f509.jpg",
      "productHref": "/product-page/hdmi-hdmi-v1-3-cable-1-8meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "DVI-D(24+1) Male to 2x DVI-D(24+1) Female Splitter Cable - 30cm",
      "slug": "dvi-d-24-1-male-to-2x-dvi-d-24-1-female-splitter-cable-30cm",
      "price": "SGD 45.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-1306c7894d1d.jpg",
      "galleryImages": [
        "/assets/vendor/file-1306c7894d1d.jpg"
      ],
      "hoverImage": "/assets/vendor/file-1306c7894d1d.jpg",
      "productHref": "/product-page/dvi-d-24-1-male-to-2x-dvi-d-24-1-female-splitter-cable-30cm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "DVI-D to DVI-D Single Link(18+1) Cable M/M -1.5meter",
      "slug": "dvi-d-to-dvi-d-single-link-18-1-cable-m-m-1-5meter",
      "price": "SGD 23.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-4bfd60e8344c.jpg",
      "galleryImages": [
        "/assets/vendor/file-4bfd60e8344c.jpg"
      ],
      "hoverImage": "/assets/vendor/file-4bfd60e8344c.jpg",
      "productHref": "/product-page/dvi-d-to-dvi-d-single-link-18-1-cable-m-m-1-5meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "DVI-A(12+5) to VGA Cable(F) -1.5meter",
      "slug": "dvi-a-12-5-to-vga-cable-f-1-5meter",
      "price": "SGD 23.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-e57c02c972d8.jpg",
      "galleryImages": [
        "/assets/vendor/file-e57c02c972d8.jpg"
      ],
      "hoverImage": "/assets/vendor/file-e57c02c972d8.jpg",
      "productHref": "/product-page/dvi-a-12-5-to-vga-cable-f-1-5meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Display Port to VGA Adapter",
      "slug": "display-port-to-vga-adapter",
      "price": "SGD 35.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-985e123e6bb6.jpg",
      "galleryImages": [
        "/assets/vendor/file-985e123e6bb6.jpg"
      ],
      "hoverImage": "/assets/vendor/file-985e123e6bb6.jpg",
      "productHref": "/product-page/display-port-to-vga-adapter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Display Port to DVI-I Dual Link(24+5)Femal Adapter",
      "slug": "display-port-to-dvi-i-dual-link-24-5-femal-adapter",
      "price": "SGD 45.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-34401cdca1c9.jpg",
      "galleryImages": [
        "/assets/vendor/file-34401cdca1c9.jpg"
      ],
      "hoverImage": "/assets/vendor/file-34401cdca1c9.jpg",
      "productHref": "/product-page/display-port-to-dvi-i-dual-link-24-5-femal-adapter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Display Port to DVI Adapter",
      "slug": "display-port-to-dvi-adapter",
      "price": "SGD 23.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-09d4f1f58669.jpg",
      "galleryImages": [
        "/assets/vendor/file-09d4f1f58669.jpg"
      ],
      "hoverImage": "/assets/vendor/file-09d4f1f58669.jpg",
      "productHref": "/product-page/display-port-to-dvi-adapter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Display Port Cable - 0.5meter",
      "slug": "display-port-cable-0-5meter",
      "price": "SGD 23.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-4078a3a7bbca.jpg",
      "galleryImages": [
        "/assets/vendor/file-4078a3a7bbca.jpg"
      ],
      "hoverImage": "/assets/vendor/file-4078a3a7bbca.jpg",
      "productHref": "/product-page/display-port-cable-0-5meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Display Port M to HDMI F cable",
      "slug": "display-port-m-to-hdmi-f-cable",
      "price": "SGD 33.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-0fe594ccff70.jpg",
      "galleryImages": [
        "/assets/vendor/file-0fe594ccff70.jpg"
      ],
      "hoverImage": "/assets/vendor/file-0fe594ccff70.jpg",
      "productHref": "/product-page/display-port-m-to-hdmi-f-cable",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Cat.7 FTP RJ45 Patch Cord - Straight Cable 鈥?Black",
      "slug": "cat-7-ftp-rj45-patch-cord-straight-cable-black",
      "price": "SGD 12.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-c3daf779cb10.jpg",
      "galleryImages": [
        "/assets/vendor/file-c3daf779cb10.jpg",
        "/assets/vendor/file-869fbe0d9931.jpg"
      ],
      "hoverImage": "/assets/vendor/file-869fbe0d9931.jpg",
      "productHref": "/product-page/cat-7-ftp-rj45-patch-cord-straight-cable-black",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Cat.6A UTP RJ45 Patch Cord - Straight Cable - Blue",
      "slug": "cat-6a-utp-rj45-patch-cord-straight-cable-blue",
      "price": "SGD 9.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-1ce087a7570c.jpg",
      "galleryImages": [
        "/assets/vendor/file-1ce087a7570c.jpg",
        "/assets/vendor/file-2ebc4321bd25.png"
      ],
      "hoverImage": "/assets/vendor/file-2ebc4321bd25.png",
      "productHref": "/product-page/cat-6a-utp-rj45-patch-cord-straight-cable-blue",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Cat.6 UTP RJ45 Patch Cord - Straight Cable - Blue",
      "slug": "cat-6-utp-rj45-patch-cord-straight-cable-blue",
      "price": "SGD 7.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-31e008453bc3.jpg",
      "galleryImages": [
        "/assets/vendor/file-31e008453bc3.jpg",
        "/assets/vendor/file-844ead8be927.jpg"
      ],
      "hoverImage": "/assets/vendor/file-844ead8be927.jpg",
      "productHref": "/product-page/cat-6-utp-rj45-patch-cord-straight-cable-blue",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "C5 Cloverleaf to UK 3Pin Power Cord 鈥?1.8meter",
      "slug": "c5-cloverleaf-to-uk-3pin-power-cord-1-8meter",
      "price": "SGD 13.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-24a28a62307d.jpg",
      "galleryImages": [
        "/assets/vendor/file-24a28a62307d.jpg",
        "/assets/vendor/file-1d77496432e9.jpg",
        "/assets/vendor/file-ea9511740f42.jpg"
      ],
      "hoverImage": "/assets/vendor/file-1d77496432e9.jpg",
      "productHref": "/product-page/c5-cloverleaf-to-uk-3pin-power-cord-1-8meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "C19-C20 UPS Extension Cable - 3meter",
      "slug": "c19-c20-ups-extension-cable-3meter",
      "price": "SGD 39.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-ac7adf3742e7.jpg",
      "galleryImages": [
        "/assets/vendor/file-ac7adf3742e7.jpg",
        "/assets/vendor/file-aa466354341f.png",
        "/assets/vendor/file-c9fa3292a7e8.jpg"
      ],
      "hoverImage": "/assets/vendor/file-aa466354341f.png",
      "productHref": "/product-page/c19-c20-ups-extension-cable-3meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "C13-C14 copper Extension Power Cord  鈥?2meter,",
      "slug": "c13-c14-copper-extension-power-cord-2meter",
      "price": "SGD 22.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b53f20943190.jpg",
      "galleryImages": [
        "/assets/vendor/file-b53f20943190.jpg",
        "/assets/vendor/file-916fceba0373.jpg"
      ],
      "hoverImage": "/assets/vendor/file-916fceba0373.jpg",
      "productHref": "/product-page/c13-c14-copper-extension-power-cord-2meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "C13-C14 Extension Power Cord",
      "slug": "c13-c14-extension-power-cord",
      "price": "SGD 12.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b53f20943190.jpg",
      "galleryImages": [
        "/assets/vendor/file-b53f20943190.jpg",
        "/assets/vendor/file-916fceba0373.jpg"
      ],
      "hoverImage": "/assets/vendor/file-916fceba0373.jpg",
      "productHref": "/product-page/c13-c14-extension-power-cord",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "C13-C20 Power Cord - 2meter",
      "slug": "c13-c20-power-cord-2meter",
      "price": "SGD 39.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-916fceba0373.jpg",
      "galleryImages": [
        "/assets/vendor/file-916fceba0373.jpg",
        "/assets/vendor/file-b53f20943190.jpg"
      ],
      "hoverImage": "/assets/vendor/file-b53f20943190.jpg",
      "productHref": "/product-page/c13-c20-power-cord-2meter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Hydronic LCD Arm for Apple",
      "slug": "hydronic-lcd-arm-for-apple",
      "price": "SGD 289.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-4380b1974012.png",
      "galleryImages": [
        "/assets/vendor/file-4380b1974012.png"
      ],
      "hoverImage": "/assets/vendor/file-4380b1974012.png",
      "productHref": "/product-page/hydronic-lcd-arm-for-apple",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Hydronic Laptop LCD Arm (Shorter)",
      "slug": "hydronic-laptop-lcd-arm-shorter",
      "price": "SGD 249.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-e06f3e1e82d1.png",
      "galleryImages": [
        "/assets/vendor/file-e06f3e1e82d1.png"
      ],
      "hoverImage": "/assets/vendor/file-e06f3e1e82d1.png",
      "productHref": "/product-page/hydronic-laptop-lcd-arm-shorter",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    }
  ],
  [
    {
      "title": "Hydronic Laptop LCD Arm",
      "slug": "hydronic-laptop-lcd-arm",
      "price": "SGD 279.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-9c0b12db37b5.png",
      "galleryImages": [
        "/assets/vendor/file-9c0b12db37b5.png"
      ],
      "hoverImage": "/assets/vendor/file-9c0b12db37b5.png",
      "productHref": "/product-page/hydronic-laptop-lcd-arm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "TOUGH Hydronic Dual LCD Monitor Arm",
      "slug": "tough-hydronic-dual-lcd-monitor-arm",
      "price": "SGD 550.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-02b38205a016.png",
      "galleryImages": [
        "/assets/vendor/file-02b38205a016.png",
        "/assets/vendor/file-7269fe275c62.jpg",
        "/assets/vendor/file-ffcc55ba8c19.jpg",
        "/assets/vendor/file-660fe7dff566.jpg"
      ],
      "hoverImage": "/assets/vendor/file-7269fe275c62.jpg",
      "productHref": "/product-page/tough-hydronic-dual-lcd-monitor-arm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Hydronic 4 Side-by-Side LCD Monitor Arm",
      "slug": "hydronic-4-side-by-side-lcd-monitor-arm",
      "price": "SGD 1,079.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-91a08ab8eb40.png",
      "galleryImages": [
        "/assets/vendor/file-91a08ab8eb40.png"
      ],
      "hoverImage": "/assets/vendor/file-91a08ab8eb40.png",
      "productHref": "/product-page/hydronic-4-side-by-side-lcd-monitor-arm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Dual Hydronic LCD Arm for LCD and Notebook",
      "slug": "dual-hydronic-lcd-arm-for-lcd-and-notebook",
      "price": "SGD 489.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-a8801f26c854.png",
      "galleryImages": [
        "/assets/vendor/file-a8801f26c854.png"
      ],
      "hoverImage": "/assets/vendor/file-a8801f26c854.png",
      "productHref": "/product-page/dual-hydronic-lcd-arm-for-lcd-and-notebook",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "TOUGH Vertical LCD Stand",
      "slug": "tough-vertical-lcd-stand",
      "price": "SGD 269.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-0063cd226842.jpg",
      "galleryImages": [
        "/assets/vendor/file-0063cd226842.jpg"
      ],
      "hoverImage": "/assets/vendor/file-0063cd226842.jpg",
      "productHref": "/product-page/tough-vertical-lcd-stand",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "TOUGH Triple Three LCD Stand",
      "slug": "tough-triple-three-lcd-stand",
      "price": "SGD 529.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b633050152fd.jpg",
      "galleryImages": [
        "/assets/vendor/file-b633050152fd.jpg"
      ],
      "hoverImage": "/assets/vendor/file-b633050152fd.jpg",
      "productHref": "/product-page/tough-triple-three-lcd-stand",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough Sextuple LCD Stand",
      "slug": "tough-sextuple-lcd-stand",
      "price": "SGD 869.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-6c10614fedd2.jpg",
      "galleryImages": [
        "/assets/vendor/file-6c10614fedd2.jpg"
      ],
      "hoverImage": "/assets/vendor/file-6c10614fedd2.jpg",
      "productHref": "/product-page/tough-sextuple-lcd-stand",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough Hydronic Dual Side-by-Side LCD Monitor Arm",
      "slug": "tough-hydronic-dual-side-by-side-lcd-monitor-arm",
      "price": "SGD 319.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-20bca5f0df8a.jpg",
      "galleryImages": [
        "/assets/vendor/file-20bca5f0df8a.jpg"
      ],
      "hoverImage": "/assets/vendor/file-20bca5f0df8a.jpg",
      "productHref": "/product-page/tough-hydronic-dual-side-by-side-lcd-monitor-arm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough Quad LCD Stand",
      "slug": "tough-quad-lcd-stand",
      "price": "SGD 739.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-2f9b9c2ef18a.jpg",
      "galleryImages": [
        "/assets/vendor/file-2f9b9c2ef18a.jpg"
      ],
      "hoverImage": "/assets/vendor/file-2f9b9c2ef18a.jpg",
      "productHref": "/product-page/tough-quad-lcd-stand",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Dual Vertical LCD Stand",
      "slug": "dual-vertical-lcd-stand",
      "price": "SGD 389.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-6502170fa3a1.jpg",
      "galleryImages": [
        "/assets/vendor/file-6502170fa3a1.jpg"
      ],
      "hoverImage": "/assets/vendor/file-6502170fa3a1.jpg",
      "productHref": "/product-page/dual-vertical-lcd-stand",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Dual LCD Stand",
      "slug": "dual-lcd-stand",
      "price": "SGD 339.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-8163a0918192.jpg",
      "galleryImages": [
        "/assets/vendor/file-8163a0918192.jpg"
      ],
      "hoverImage": "/assets/vendor/file-8163a0918192.jpg",
      "productHref": "/product-page/dual-lcd-stand",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Material",
          "values": [
            "Aluminum"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough PDU 19inch 6port UK socket output A13",
      "slug": "pdu-19inch-6port-uk-socket-output-a13",
      "price": "SGD 100.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-f20d0e32932e.png",
      "galleryImages": [
        "/assets/vendor/file-f20d0e32932e.png",
        "/assets/vendor/file-6ab36bae449f.png",
        "/assets/vendor/file-feee33564259.png"
      ],
      "hoverImage": "/assets/vendor/file-6ab36bae449f.png",
      "productHref": "/product-page/pdu-19inch-6port-uk-socket-output-a13",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": []
    },
    {
      "title": "Tough CX 42U, 600mm x 1000mm(D)--Equipment Rack",
      "slug": "tough-cx-42u-600mm-x-1000mm-d-equipment-rack",
      "price": "SGD 1,288.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-8173f9ae28ae.png",
      "galleryImages": [
        "/assets/vendor/file-8173f9ae28ae.png",
        "/assets/vendor/file-a6d4215ff335.png",
        "/assets/vendor/file-5f8089c3af60.png",
        "/assets/vendor/file-bfe511cafc9d.png",
        "/assets/vendor/file-ef6d7c5c75ce.png",
        "/assets/vendor/file-e563200c5034.png",
        "/assets/vendor/file-424cafa59707.png",
        "/assets/vendor/file-23115fbc5947.jpg"
      ],
      "hoverImage": "/assets/vendor/file-a6d4215ff335.png",
      "productHref": "/product-page/tough-cx-42u-600mm-x-1000mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 42U, 600mm x 800mm(D)--Equipment Rack",
      "slug": "tough-cx-42u-600mm-x-800mm-d-equipment-rack",
      "price": "SGD 1,099.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-ef6d7c5c75ce.png",
      "galleryImages": [
        "/assets/vendor/file-ef6d7c5c75ce.png",
        "/assets/vendor/file-e563200c5034.png",
        "/assets/vendor/file-a6d4215ff335.png",
        "/assets/vendor/file-5f8089c3af60.png",
        "/assets/vendor/file-8173f9ae28ae.png",
        "/assets/vendor/file-424cafa59707.png",
        "/assets/vendor/file-bfe511cafc9d.png"
      ],
      "hoverImage": "/assets/vendor/file-e563200c5034.png",
      "productHref": "/product-page/tough-cx-42u-600mm-x-800mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 42U, 600mm x 600mm(D)--Equipment Rack",
      "slug": "tough-42u-equipment-rack-600mm-x-600mm-d",
      "price": "SGD 999.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b704ceff7b6f.png",
      "galleryImages": [
        "/assets/vendor/file-b704ceff7b6f.png",
        "/assets/vendor/file-8662dee17558.png",
        "/assets/vendor/file-5327bb677702.png",
        "/assets/vendor/file-c4910ae9675d.png",
        "/assets/vendor/file-37f5c6f24911.png",
        "/assets/vendor/file-926430218ee7.png",
        "/assets/vendor/file-3436b65e9c14.png",
        "/assets/vendor/file-23115fbc5947.jpg"
      ],
      "hoverImage": "/assets/vendor/file-8662dee17558.png",
      "productHref": "/product-page/tough-42u-equipment-rack-600mm-x-600mm-d",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 36U, 600mm x 1000mm(D)--Equipment Rack",
      "slug": "tough-cx-36u-600mm-x-1000mm-d-equipment-rack",
      "price": "SGD 1,050.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-8173f9ae28ae.png",
      "galleryImages": [
        "/assets/vendor/file-8173f9ae28ae.png",
        "/assets/vendor/file-e563200c5034.png",
        "/assets/vendor/file-bfe511cafc9d.png",
        "/assets/vendor/file-ef6d7c5c75ce.png",
        "/assets/vendor/file-a6d4215ff335.png",
        "/assets/vendor/file-5f8089c3af60.png",
        "/assets/vendor/file-424cafa59707.png",
        "/assets/vendor/file-23115fbc5947.jpg"
      ],
      "hoverImage": "/assets/vendor/file-e563200c5034.png",
      "productHref": "/product-page/tough-cx-36u-600mm-x-1000mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 36U, 600mm x 800mm(D)--Equipment Rack",
      "slug": "tough-cx-36u-600mm-x-800mm-d-equipment-rack",
      "price": "SGD 990.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b704ceff7b6f.png",
      "galleryImages": [
        "/assets/vendor/file-b704ceff7b6f.png",
        "/assets/vendor/file-5327bb677702.png",
        "/assets/vendor/file-c4910ae9675d.png",
        "/assets/vendor/file-37f5c6f24911.png",
        "/assets/vendor/file-926430218ee7.png",
        "/assets/vendor/file-8662dee17558.png",
        "/assets/vendor/file-3436b65e9c14.png"
      ],
      "hoverImage": "/assets/vendor/file-5327bb677702.png",
      "productHref": "/product-page/tough-cx-36u-600mm-x-800mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 36U, 600mm x 600mm(D)--Equipment Rack",
      "slug": "tough-cx-36u-600mm-x-600mm-d-equipment-rack",
      "price": "SGD 930.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b704ceff7b6f.png",
      "galleryImages": [
        "/assets/vendor/file-b704ceff7b6f.png",
        "/assets/vendor/file-8662dee17558.png",
        "/assets/vendor/file-5327bb677702.png",
        "/assets/vendor/file-c4910ae9675d.png",
        "/assets/vendor/file-37f5c6f24911.png",
        "/assets/vendor/file-926430218ee7.png",
        "/assets/vendor/file-3436b65e9c14.png",
        "/assets/vendor/file-23115fbc5947.jpg"
      ],
      "hoverImage": "/assets/vendor/file-8662dee17558.png",
      "productHref": "/product-page/tough-cx-36u-600mm-x-600mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 31U, 600mm x 1000mm(D)--Equipment Rack",
      "slug": "tough-cx-31u-600mm-x-1000mm-d-equipment-rack",
      "price": "SGD 999.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-2cb4b5eaaf3a.png",
      "galleryImages": [
        "/assets/vendor/file-2cb4b5eaaf3a.png",
        "/assets/vendor/file-910614882c51.png",
        "/assets/vendor/file-4843508102fd.png",
        "/assets/vendor/file-5699946d626d.png",
        "/assets/vendor/file-5429a56bca0c.png",
        "/assets/vendor/file-06c13bfb5643.png"
      ],
      "hoverImage": "/assets/vendor/file-910614882c51.png",
      "productHref": "/product-page/tough-cx-31u-600mm-x-1000mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 31U, 600mm x 800mm(D)--Equipment Rack",
      "slug": "tough-cx-31u-600mm-x-800mm-d-equipment-rack",
      "price": "SGD 960.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-2cb4b5eaaf3a.png",
      "galleryImages": [
        "/assets/vendor/file-2cb4b5eaaf3a.png",
        "/assets/vendor/file-910614882c51.png",
        "/assets/vendor/file-5699946d626d.png",
        "/assets/vendor/file-4843508102fd.png",
        "/assets/vendor/file-5429a56bca0c.png",
        "/assets/vendor/file-06c13bfb5643.png"
      ],
      "hoverImage": "/assets/vendor/file-910614882c51.png",
      "productHref": "/product-page/tough-cx-31u-600mm-x-800mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 31U, 600mm x 600mm(D)--Equipment Rack",
      "slug": "tough-cx-31u-600mm-x-600mm-d-equipment-rack",
      "price": "SGD 899.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-37657fe0aae2.png",
      "galleryImages": [
        "/assets/vendor/file-37657fe0aae2.png",
        "/assets/vendor/file-09650fdcf066.png",
        "/assets/vendor/file-707041514956.png",
        "/assets/vendor/file-bb4f781bb4c1.png",
        "/assets/vendor/file-1af475bd1b9f.png",
        "/assets/vendor/file-197d254ab815.png"
      ],
      "hoverImage": "/assets/vendor/file-09650fdcf066.png",
      "productHref": "/product-page/tough-cx-31u-600mm-x-600mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 27U, 600mm x 1000mm(D)--Equipment Rack",
      "slug": "tough-cx-27u-600mm-x-1000mm-d-equipment-rack",
      "price": "SGD 990.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-2cb4b5eaaf3a.png",
      "galleryImages": [
        "/assets/vendor/file-2cb4b5eaaf3a.png",
        "/assets/vendor/file-910614882c51.png",
        "/assets/vendor/file-4843508102fd.png",
        "/assets/vendor/file-5699946d626d.png",
        "/assets/vendor/file-5429a56bca0c.png",
        "/assets/vendor/file-06c13bfb5643.png"
      ],
      "hoverImage": "/assets/vendor/file-910614882c51.png",
      "productHref": "/product-page/tough-cx-27u-600mm-x-1000mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 27U, 600mm x 800mm(D)--Equipment Rack",
      "slug": "tough-cx-27u-600mm-x-800mm-d-equipment-rack",
      "price": "SGD 920.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-2cb4b5eaaf3a.png",
      "galleryImages": [
        "/assets/vendor/file-2cb4b5eaaf3a.png",
        "/assets/vendor/file-910614882c51.png",
        "/assets/vendor/file-4843508102fd.png",
        "/assets/vendor/file-5699946d626d.png",
        "/assets/vendor/file-5429a56bca0c.png",
        "/assets/vendor/file-06c13bfb5643.png"
      ],
      "hoverImage": "/assets/vendor/file-910614882c51.png",
      "productHref": "/product-page/tough-cx-27u-600mm-x-800mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 27U, 600mm x 600mm(D)--Equipment Rack",
      "slug": "tough-cx-27u-600mm-x-600mm-d-equipment-rack",
      "price": "SGD 880.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-2cdc03339230.jpg",
      "galleryImages": [
        "/assets/vendor/file-2cdc03339230.jpg",
        "/assets/vendor/file-67e317e972bc.jpg",
        "/assets/vendor/file-8d064b2f1af8.jpg",
        "/assets/vendor/file-209c7ac27305.jpg",
        "/assets/vendor/file-1e9f876d6871.jpg",
        "/assets/vendor/file-65147e6d6e4b.jpg",
        "/assets/vendor/file-cadd4ff2e065.jpg"
      ],
      "hoverImage": "/assets/vendor/file-67e317e972bc.jpg",
      "productHref": "/product-page/tough-cx-27u-600mm-x-600mm-d-equipment-rack",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    }
  ],
  [
    {
      "title": "Tough CX 21U, 600mm x 1000mm(D)--Equipment Rack",
      "slug": "21u-equipment-rack-1000mm",
      "price": "SGD 880.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-43c57fa8b035.png",
      "galleryImages": [
        "/assets/vendor/file-43c57fa8b035.png",
        "/assets/vendor/file-7bd2183f9dad.png",
        "/assets/vendor/file-4a56f1c6dadc.png",
        "/assets/vendor/file-0262e586b693.png",
        "/assets/vendor/file-16a0ae13db34.png",
        "/assets/vendor/file-ba3a97c6bf6a.png",
        "/assets/vendor/file-3f9425f40bb0.png"
      ],
      "hoverImage": "/assets/vendor/file-7bd2183f9dad.png",
      "productHref": "/product-page/21u-equipment-rack-1000mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 21U, 600mm x 800mm(D)--Equipment Rack",
      "slug": "tough-cx-18u-600mm-x-800mm-d-equipment-rack",
      "price": "SGD 825.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-4eaf6151c9cc.jpg",
      "galleryImages": [
        "/assets/vendor/file-4eaf6151c9cc.jpg",
        "/assets/vendor/file-e7864a650877.jpg",
        "/assets/vendor/file-baf877bb061b.jpg",
        "/assets/vendor/file-f85014310cad.jpg",
        "/assets/vendor/file-7c88b04af3e9.jpg",
        "/assets/vendor/file-2d035adf4877.jpg",
        "/assets/vendor/file-6cfb18af9f4d.jpg"
      ],
      "hoverImage": "/assets/vendor/file-e7864a650877.jpg",
      "productHref": "/product-page/tough-cx-18u-600mm-x-800mm-d-equipment-rack",
      "stock": "out",
      "sale": false,
      "quantity": false,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 21U, 600mm x 600mm(D)--Equipment Rack",
      "slug": "tough-cx-21u-600mm-x-600mm-d-equipment-rack",
      "price": "SGD 775.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-4eaf6151c9cc.jpg",
      "galleryImages": [
        "/assets/vendor/file-4eaf6151c9cc.jpg",
        "/assets/vendor/file-e7864a650877.jpg",
        "/assets/vendor/file-f85014310cad.jpg",
        "/assets/vendor/file-2d035adf4877.jpg",
        "/assets/vendor/file-7c88b04af3e9.jpg",
        "/assets/vendor/file-baf877bb061b.jpg",
        "/assets/vendor/file-6cfb18af9f4d.jpg"
      ],
      "hoverImage": "/assets/vendor/file-e7864a650877.jpg",
      "productHref": "/product-page/tough-cx-21u-600mm-x-600mm-d-equipment-rack",
      "stock": "out",
      "sale": false,
      "quantity": false,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 18U, 600mm x 1000mm(D)--Equipment Rack",
      "slug": "tough-cx-18u-600mm-x-1000mm-d",
      "price": "SGD 858.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-dbb2c0f352d5.png",
      "galleryImages": [
        "/assets/vendor/file-dbb2c0f352d5.png",
        "/assets/vendor/file-3b2b3fcfe951.png",
        "/assets/vendor/file-0cde0744d7f4.jpg",
        "/assets/vendor/file-a88fddb50c2e.png",
        "/assets/vendor/file-ff2103666b8e.png"
      ],
      "hoverImage": "/assets/vendor/file-3b2b3fcfe951.png",
      "productHref": "/product-page/tough-cx-18u-600mm-x-1000mm-d",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 18U, 600mm x 800mm(D)-Equipment Rack",
      "slug": "tough-cx-18u-600mm-x-800mm-d",
      "price": "SGD 808.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-4eaf6151c9cc.jpg",
      "galleryImages": [
        "/assets/vendor/file-4eaf6151c9cc.jpg",
        "/assets/vendor/file-f85014310cad.jpg",
        "/assets/vendor/file-2d035adf4877.jpg",
        "/assets/vendor/file-e7864a650877.jpg",
        "/assets/vendor/file-7c88b04af3e9.jpg",
        "/assets/vendor/file-baf877bb061b.jpg",
        "/assets/vendor/file-6cfb18af9f4d.jpg"
      ],
      "hoverImage": "/assets/vendor/file-f85014310cad.jpg",
      "productHref": "/product-page/tough-cx-18u-600mm-x-800mm-d",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "Tough CX 18U, 600mm x 600mm(D)--Equipment Rack",
      "slug": "tough-cx-18u-600mm-x-600mm-d",
      "price": "SGD 758.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-4eaf6151c9cc.jpg",
      "galleryImages": [
        "/assets/vendor/file-4eaf6151c9cc.jpg",
        "/assets/vendor/file-e7864a650877.jpg",
        "/assets/vendor/file-2d035adf4877.jpg",
        "/assets/vendor/file-f85014310cad.jpg",
        "/assets/vendor/file-7c88b04af3e9.jpg",
        "/assets/vendor/file-baf877bb061b.jpg",
        "/assets/vendor/file-6cfb18af9f4d.jpg"
      ],
      "hoverImage": "/assets/vendor/file-e7864a650877.jpg",
      "productHref": "/product-page/tough-cx-18u-600mm-x-600mm-d",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "15U Double Section Wall Mount Cabinet",
      "slug": "15u-double-section-wall-mount-cabinet",
      "price": "SGD 600.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-58fe88503915.jpg",
      "galleryImages": [
        "/assets/vendor/file-58fe88503915.jpg",
        "/assets/vendor/file-709f83bf18e8.jpg"
      ],
      "hoverImage": "/assets/vendor/file-709f83bf18e8.jpg",
      "productHref": "/product-page/15u-double-section-wall-mount-cabinet",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        },
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        }
      ]
    },
    {
      "title": "12U Double Section Wall Mount Cabinet",
      "slug": "12u-double-section-wall-mount-cabinet",
      "price": "SGD 575.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b5755a529b2f.jpg",
      "galleryImages": [
        "/assets/vendor/file-b5755a529b2f.jpg",
        "/assets/vendor/file-709f83bf18e8.jpg"
      ],
      "hoverImage": "/assets/vendor/file-709f83bf18e8.jpg",
      "productHref": "/product-page/12u-double-section-wall-mount-cabinet",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        },
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        }
      ]
    },
    {
      "title": "9U Double Section Wall Mount Cabinet",
      "slug": "9u-double-section-wall-mount-cabinet-600mm",
      "price": "SGD 510.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b5755a529b2f.jpg",
      "galleryImages": [
        "/assets/vendor/file-b5755a529b2f.jpg",
        "/assets/vendor/file-709f83bf18e8.jpg"
      ],
      "hoverImage": "/assets/vendor/file-709f83bf18e8.jpg",
      "productHref": "/product-page/9u-double-section-wall-mount-cabinet-600mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        },
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        }
      ]
    },
    {
      "title": "6U Double Section Wall Mount Cabinet",
      "slug": "6u-double-section-wall-mount-cabinet-450mm",
      "price": "SGD 400.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-b5755a529b2f.jpg",
      "galleryImages": [
        "/assets/vendor/file-b5755a529b2f.jpg",
        "/assets/vendor/file-709f83bf18e8.jpg"
      ],
      "hoverImage": "/assets/vendor/file-709f83bf18e8.jpg",
      "productHref": "/product-page/6u-double-section-wall-mount-cabinet-450mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        },
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        }
      ]
    },
    {
      "title": "15U Wall Mount Cabinet 600mm",
      "slug": "15u-wall-mount-cabinet-600mm",
      "price": "SGD 570.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-31f1c5943484.jpg",
      "galleryImages": [
        "/assets/vendor/file-31f1c5943484.jpg",
        "/assets/vendor/file-4473748c6d04.jpg",
        "/assets/vendor/file-08a91a53939b.jpg"
      ],
      "hoverImage": "/assets/vendor/file-4473748c6d04.jpg",
      "productHref": "/product-page/15u-wall-mount-cabinet-600mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "15U Wall Mount Cabinet 450mm",
      "slug": "15u-wall-mount-cabinet-450mm",
      "price": "SGD 520.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-31f1c5943484.jpg",
      "galleryImages": [
        "/assets/vendor/file-31f1c5943484.jpg",
        "/assets/vendor/file-4473748c6d04.jpg",
        "/assets/vendor/file-08a91a53939b.jpg"
      ],
      "hoverImage": "/assets/vendor/file-4473748c6d04.jpg",
      "productHref": "/product-page/15u-wall-mount-cabinet-450mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "12U Wall Mount Cabinet 600mm",
      "slug": "12u-wall-mount-cabinet-600mm",
      "price": "SGD 520.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-31f1c5943484.jpg",
      "galleryImages": [
        "/assets/vendor/file-31f1c5943484.jpg",
        "/assets/vendor/file-4473748c6d04.jpg",
        "/assets/vendor/file-08a91a53939b.jpg"
      ],
      "hoverImage": "/assets/vendor/file-4473748c6d04.jpg",
      "productHref": "/product-page/12u-wall-mount-cabinet-600mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "12U Wall Mount Cabinet 450mm",
      "slug": "12u-wall-mount-cabinet-450mm",
      "price": "SGD 460.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-31f1c5943484.jpg",
      "galleryImages": [
        "/assets/vendor/file-31f1c5943484.jpg",
        "/assets/vendor/file-4473748c6d04.jpg",
        "/assets/vendor/file-08a91a53939b.jpg"
      ],
      "hoverImage": "/assets/vendor/file-4473748c6d04.jpg",
      "productHref": "/product-page/12u-wall-mount-cabinet-450mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "9U Wall Mount Cabinet 450mm",
      "slug": "9u-wall-mount-cabinet-450mm",
      "price": "SGD 370.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-cedbd596af25.jpg",
      "galleryImages": [
        "/assets/vendor/file-cedbd596af25.jpg",
        "/assets/vendor/file-1cd914c58eb2.jpg",
        "/assets/vendor/file-38b157602ff1.jpg",
        "/assets/vendor/file-df4b3cb284bc.jpg",
        "/assets/vendor/file-4533a81e3e5c.jpg"
      ],
      "hoverImage": "/assets/vendor/file-1cd914c58eb2.jpg",
      "productHref": "/product-page/9u-wall-mount-cabinet-450mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "9U Wall Mount Cabinet 600mm",
      "slug": "9u-wall-mount-cabinet-600mm",
      "price": "SGD 430.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-cedbd596af25.jpg",
      "galleryImages": [
        "/assets/vendor/file-cedbd596af25.jpg",
        "/assets/vendor/file-1cd914c58eb2.jpg",
        "/assets/vendor/file-38b157602ff1.jpg",
        "/assets/vendor/file-df4b3cb284bc.jpg",
        "/assets/vendor/file-4533a81e3e5c.jpg"
      ],
      "hoverImage": "/assets/vendor/file-1cd914c58eb2.jpg",
      "productHref": "/product-page/9u-wall-mount-cabinet-600mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "6U Wall Mount Cabinet 600mm",
      "slug": "6u-wall-mount-cabinet-600mm",
      "price": "SGD 370.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-f9fc2d61ec4a.jpg",
      "galleryImages": [
        "/assets/vendor/file-f9fc2d61ec4a.jpg",
        "/assets/vendor/file-87885d43eb85.png",
        "/assets/vendor/file-e23f380e9336.jpg",
        "/assets/vendor/file-bbd038ff51fe.jpg",
        "/assets/vendor/file-18f2d6e72cde.jpg",
        "/assets/vendor/file-d0609be26c43.jpg"
      ],
      "hoverImage": "/assets/vendor/file-87885d43eb85.png",
      "productHref": "/product-page/6u-wall-mount-cabinet-600mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "6U Wall Mount Cabinet 450mm",
      "slug": "6u-wall-mount-cabinet-with-glass-door-450mm",
      "price": "SGD 320.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-f9fc2d61ec4a.jpg",
      "galleryImages": [
        "/assets/vendor/file-f9fc2d61ec4a.jpg",
        "/assets/vendor/file-87885d43eb85.png",
        "/assets/vendor/file-e23f380e9336.jpg",
        "/assets/vendor/file-bbd038ff51fe.jpg",
        "/assets/vendor/file-18f2d6e72cde.jpg",
        "/assets/vendor/file-d0609be26c43.jpg"
      ],
      "hoverImage": "/assets/vendor/file-87885d43eb85.png",
      "productHref": "/product-page/6u-wall-mount-cabinet-with-glass-door-450mm",
      "stock": "in",
      "sale": false,
      "quantity": true,
      "options": [
        {
          "name": "Door",
          "values": [
            "Glass",
            "Mesh",
            "Perforated Door"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue",
            "Grey",
            "Midnight",
            "Silver",
            "white"
          ]
        }
      ]
    },
    {
      "title": "UPS - APC Smart-UPS SRT10KRMXLI /SRT10000VA RM 230V",
      "slug": "ups-apc-smart-ups-srt10krmxli-srt10000va-rm-230v",
      "price": "SGD 11,500.00",
      "comparePrice": "SGD 10,719.00",
      "image": "/assets/vendor/file-6f981161bf7e.jpg",
      "galleryImages": [
        "/assets/vendor/file-6f981161bf7e.jpg",
        "/assets/vendor/file-e6f503b21042.jpg",
        "/assets/vendor/file-9599b74d6ac1.jpg",
        "/assets/vendor/file-c25294ab01fa.jpg",
        "/assets/vendor/file-1804251df9ff.jpg",
        "/assets/vendor/file-e89ae43f3207.jpg"
      ],
      "hoverImage": "/assets/vendor/file-e6f503b21042.jpg",
      "productHref": "/product-page/ups-apc-smart-ups-srt10krmxli-srt10000va-rm-230v",
      "stock": "in",
      "ribbon": "Higher-Grade",
      "sale": true,
      "quantity": true,
      "options": []
    },
    {
      "title": "Synology Rack Station RX1217",
      "slug": "synology-rack-station-rx1217",
      "price": "SGD 2,110.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-03beb903c70f.jpg",
      "galleryImages": [
        "/assets/vendor/file-03beb903c70f.jpg",
        "/assets/vendor/file-94242b4d50b1.jpg",
        "/assets/vendor/file-ce111dcea33b.jpg",
        "/assets/vendor/file-794afc2f7543.jpg",
        "/assets/vendor/file-5fb527ef0425.jpg",
        "/assets/vendor/file-eff430c58403.jpg"
      ],
      "hoverImage": "/assets/vendor/file-94242b4d50b1.jpg",
      "productHref": "/product-page/synology-rack-station-rx1217",
      "stock": "in",
      "ribbon": "RM-High Efficient",
      "sale": true,
      "quantity": true,
      "options": [
        {
          "name": "Sliding Rail Kit",
          "values": [
            "None",
            "RKS-01",
            "RKS-02"
          ]
        }
      ]
    },
    {
      "title": "HPE DL360 Gen10 8SFF",
      "slug": "copy-of-hpe-proliant-dl380-gen10-8lff-nc-configure-to-order-server",
      "price": "SGD 5,699.00",
      "comparePrice": "",
      "image": "/assets/vendor/file-e5b237a0c9c2.png",
      "galleryImages": [
        "/assets/vendor/file-e5b237a0c9c2.png",
        "/assets/vendor/file-108e79ce1de5.png",
        "/assets/vendor/file-69b43b939597.png",
        "/assets/vendor/file-2fbd2a919e29.png",
        "/assets/vendor/file-be51d31d0ffb.png",
        "/assets/vendor/file-a693a1c2832e.png"
      ],
      "hoverImage": "/assets/vendor/file-108e79ce1de5.png",
      "productHref": "/product-page/copy-of-hpe-proliant-dl380-gen10-8lff-nc-configure-to-order-server",
      "stock": "in",
      "ribbon": "SALE",
      "sale": true,
      "quantity": true,
      "options": []
    }
  ]
] satisfies ShopCatalogProduct[][];

export const shopCatalog = shopCatalogPages.flat();

export const shopCatalogBySlug = Object.fromEntries(
  shopCatalog.map((product) => [product.slug, product]),
) as Record<string, ShopCatalogProduct>;

