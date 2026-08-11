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
      "image": "https://static.wixstatic.com/media/1470f5_5f68f9571c514b3586a0a7999a12b9b9~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/1470f5_5f68f9571c514b3586a0a7999a12b9b9~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/1470f5_468dddaab3b944f4b5b5c143f04397ae~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/1470f5_5dbf3858565f43a4990e5d73679fc792~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/1470f5_513351a270b04af3a249010859aff7b8~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/1470f5_da0df546a10042f5bf7125cf27ec8fc0~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/1470f5_468dddaab3b944f4b5b5c143f04397ae~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_8f952d0150a1462298a7c3c31f3886c1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_8f952d0150a1462298a7c3c31f3886c1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_42599a5df52e4726a31d3140c44c9ae7~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_42599a5df52e4726a31d3140c44c9ae7~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_2aa61e48bd22426794e9039cf1e26f61~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_2aa61e48bd22426794e9039cf1e26f61~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_2aa61e48bd22426794e9039cf1e26f61~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_94cd47243427489b91c6201a90718437~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_94cd47243427489b91c6201a90718437~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_bfab121dda3b4710881a8603f0b11b6e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_bfab121dda3b4710881a8603f0b11b6e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_47939c3386bd4f9e92d31bf8b346db35~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_47939c3386bd4f9e92d31bf8b346db35~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_cf875b6ae53b439d81a6063e49122856~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_cf875b6ae53b439d81a6063e49122856~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_5ea56e55e3df4d9a8175ad651574c405~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_5ea56e55e3df4d9a8175ad651574c405~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_3cc474039157482a980f4a8e49e990b3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_552dbe1c49ad44df8bb3a73576bbd9d4~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_ca037680c3c84320b7d601aa7c9d973c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_b453b76d58824510a62ae0f193e0261d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_640ac81817734bf8a6939504ea3ee5e6~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_0376b5a96a9641dd8064e05e2e863a1c~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_3cc474039157482a980f4a8e49e990b3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_5ea56e55e3df4d9a8175ad651574c405~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_5ea56e55e3df4d9a8175ad651574c405~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_b453b76d58824510a62ae0f193e0261d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_552dbe1c49ad44df8bb3a73576bbd9d4~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_0376b5a96a9641dd8064e05e2e863a1c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_ca037680c3c84320b7d601aa7c9d973c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_3cc474039157482a980f4a8e49e990b3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_640ac81817734bf8a6939504ea3ee5e6~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_b453b76d58824510a62ae0f193e0261d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_5ea56e55e3df4d9a8175ad651574c405~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_5ea56e55e3df4d9a8175ad651574c405~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_b453b76d58824510a62ae0f193e0261d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_552dbe1c49ad44df8bb3a73576bbd9d4~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_640ac81817734bf8a6939504ea3ee5e6~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_ca037680c3c84320b7d601aa7c9d973c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_0376b5a96a9641dd8064e05e2e863a1c~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_b453b76d58824510a62ae0f193e0261d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_39fb82bef03340b1a20019e0e211bc7c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_39fb82bef03340b1a20019e0e211bc7c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c112f07122594799b465909179fe0543~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_3894673c00fc447e9c89632d648c000a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_b64c6363356144f4806f93520f830513~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_8f88e4f143944197aefd304e038311d7~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_530909c77b954ea1accf09005cbf40df~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_4f7a475d45db4a85bbeca946245a037b~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_c112f07122594799b465909179fe0543~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_51b82db172274a698a6339b7fa581dad~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_51b82db172274a698a6339b7fa581dad~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_2a0998aec7a048fc82dd0e8b099262c9~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_6b0e51e8843f46a8bb2ebcbfee660b53~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c592dd86ed7f4da8a4fd9187aa9093f8~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_2e62102721c64d4dbff3410f4787da14~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_2a0998aec7a048fc82dd0e8b099262c9~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_e6a7047fb9d845a6b792c49d617dd1ac~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_e6a7047fb9d845a6b792c49d617dd1ac~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_2e7a39855ae44be690c7f6dc28a879c1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e1a06ee3fd52411a904f5d87e519f9c6~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_858fcf66664a40388e1ed3cd06b60774~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_86e1be31fbdd448c89d85ce708dc57a2~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_2e7a39855ae44be690c7f6dc28a879c1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_722b54d9f8404c3c9855ba2a6cf17297~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_722b54d9f8404c3c9855ba2a6cf17297~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_6ae12b9bd83247498a309419f62b635a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_1a5344116de04f18b5562fece876e05b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_4c2a35dcef5d4c1f8d7f2c40c38e1a35~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_6ae12b9bd83247498a309419f62b635a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_b61f855dd8b14fa4ae2965e898e8924f~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_b61f855dd8b14fa4ae2965e898e8924f~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_1d4e9685c05347d49168c585bb74c48b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_4b70519e4fe3451db9d2a10610c0f6df~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_07b715454df24d6d90c2f28ae585336b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_bd309d3c570446feb175d7da7986f546~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_1d4e9685c05347d49168c585bb74c48b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_39fb82bef03340b1a20019e0e211bc7c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_39fb82bef03340b1a20019e0e211bc7c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_b64c6363356144f4806f93520f830513~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_3894673c00fc447e9c89632d648c000a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_8f88e4f143944197aefd304e038311d7~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_530909c77b954ea1accf09005cbf40df~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_4f7a475d45db4a85bbeca946245a037b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c112f07122594799b465909179fe0543~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_b64c6363356144f4806f93520f830513~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_8f88e4f143944197aefd304e038311d7~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_8f88e4f143944197aefd304e038311d7~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_3894673c00fc447e9c89632d648c000a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c112f07122594799b465909179fe0543~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_530909c77b954ea1accf09005cbf40df~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_b64c6363356144f4806f93520f830513~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_39fb82bef03340b1a20019e0e211bc7c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_4f7a475d45db4a85bbeca946245a037b~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_3894673c00fc447e9c89632d648c000a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "title": "DS423+ Seagate Iron Wolf  3.5 4TB x 2  unit",
      "slug": "synology-diskstation-ds423-1",
      "price": "SGD 1,157.00",
      "comparePrice": "",
      "image": "https://static.wixstatic.com/media/ab07e4_3172415dcda1441ea8f16335874d9d54~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_3172415dcda1441ea8f16335874d9d54~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_ae0d582d9dcd40008d72bc9e47fed0cd~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_ae0d582d9dcd40008d72bc9e47fed0cd~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_3172415dcda1441ea8f16335874d9d54~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_3172415dcda1441ea8f16335874d9d54~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_0800903103f0424a9a79f1191dd7eed9~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_0800903103f0424a9a79f1191dd7eed9~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_9cd0face939d44f8a17869576b3606e9~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_9cd0face939d44f8a17869576b3606e9~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e6d5ae118d3d4b659497ae8575fbd3ba~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_8ab082e56ae449ca813287b03a3e4a60~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_8a39b0799a144a87be1cdcc6d4df6efb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_bf208cfff9a045f48fcc5f317512ae5e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_2b1c2cf3e2f24b9d9f4f931fecb7aea2~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_e6d5ae118d3d4b659497ae8575fbd3ba~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "productHref": "/product-page/hpe-proliant-dl380-gen10-plus-8sff-bto-server-p43358-b21",
      "stock": "out",
      "ribbon": "SALE",
      "sale": true,
      "quantity": false,
      "options": []
    },
    {
      "title": "HPE ProLiant DL320 Gen11 5416S 2.0GHz 16‑core 1P 32GB‑R MR408i‑o 8SFF 500W PS Se",
      "slug": "hpe-proliant-dl320-gen11-5416s-2-0ghz-16-core-1p-32gb-r-mr408i-o-8sff-500w-ps-se",
      "price": "SGD 0.00",
      "comparePrice": "",
      "image": "https://static.wixstatic.com/media/ab07e4_c9c4a6ff9c794466ba299cb7cc3c4312~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_c9c4a6ff9c794466ba299cb7cc3c4312~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_abde6944d1db44569ee788b607484b38~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_af9f41f86d1a4510994d13417cc34307~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_8490af6396b34e13a40582009e2b7282~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_abde6944d1db44569ee788b607484b38~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
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
      "image": "https://static.wixstatic.com/media/ab07e4_07bcf785f9cb4239ae1570fb349ebef3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_07bcf785f9cb4239ae1570fb349ebef3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_47aafd5d7ef84809aea35f0f895a5f2c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_784d39e97d004236964a71f3b79b6a99~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_340817ece28747e0946e0898f753a135~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_47aafd5d7ef84809aea35f0f895a5f2c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_817be61dab4848eb9f79313e22d8686d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_817be61dab4848eb9f79313e22d8686d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_af56915ded46450687f7243b3083d6be~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_93d0b06afdf44a1f9e61ff81f75448b6~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_abd1ed4be5cd4523800cf65910f63018~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_340817ece28747e0946e0898f753a135~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_af56915ded46450687f7243b3083d6be~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_047d268005b24b97baefeee736aca87e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_047d268005b24b97baefeee736aca87e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c3ca580d56794afaa584ab8b180fef9b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_fbde4b7b5861407a9b257f53448384e0~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_340817ece28747e0946e0898f753a135~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_c3ca580d56794afaa584ab8b180fef9b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_100bdfb8253b4713981157c8f5ea4b1a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_100bdfb8253b4713981157c8f5ea4b1a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_a549b52bc3704be3a09666865c8c5e61~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_30350fddeeb44152a9bad324edb36747~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_7015110a3121420e836bd3f77a9bdc69~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_a549b52bc3704be3a09666865c8c5e61~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_adebca5a7dbf4dcaad2c95a4a36f3cb9~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_adebca5a7dbf4dcaad2c95a4a36f3cb9~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c95fff94234c4f7ca104a12a4586d80d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_606bcfd6867c405cb05ef080de4fe2e2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_7015110a3121420e836bd3f77a9bdc69~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_c95fff94234c4f7ca104a12a4586d80d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_bb80881d538c464381361226d8fc73d2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_bb80881d538c464381361226d8fc73d2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_cacc7a258d6941b5a0d85789f0e49e52~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_320b55f5d44c4112b79cfcdb420cb9e9~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_7015110a3121420e836bd3f77a9bdc69~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_cacc7a258d6941b5a0d85789f0e49e52~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_f4bc496264e64b9ca4259f38a29c9fac~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_f4bc496264e64b9ca4259f38a29c9fac~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c19d038b7af3472db71ebc877e56758d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_d5c01b4ea2274f10ae065f5e15706d3b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_7015110a3121420e836bd3f77a9bdc69~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_c19d038b7af3472db71ebc877e56758d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_dfbf05b957cc4511ade8448bfbb74a2f~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_dfbf05b957cc4511ade8448bfbb74a2f~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_f02ed86c16464bc8a406f947b0d9b2e1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_504d93c506ff4e9298202d013cf201dd~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_340817ece28747e0946e0898f753a135~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_f02ed86c16464bc8a406f947b0d9b2e1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_8f468eb233f0457bbd08fb52250a12c6~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_8f468eb233f0457bbd08fb52250a12c6~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_4918613e1fb640f48476756a76a9ed8c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_31ab74eb017344c5b191d4e28db46cb2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_7015110a3121420e836bd3f77a9bdc69~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_4918613e1fb640f48476756a76a9ed8c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_7d405f1a7716422e9a6ca65298aae403~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_7d405f1a7716422e9a6ca65298aae403~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_7d405f1a7716422e9a6ca65298aae403~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_ac21316e33c14b31926968304c1afaf5~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_ac21316e33c14b31926968304c1afaf5~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_2e99f151a4dc42a5a41fa38e0795952f~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_f561ba58adae417cb0a43753ececa7cd~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_340817ece28747e0946e0898f753a135~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_2e99f151a4dc42a5a41fa38e0795952f~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_f8d546d77d564ec698e880903b807673~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_f8d546d77d564ec698e880903b807673~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_d54073dc58c243f3a45ee217f9105ffe~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_35a45a4141a0466bb3f03c0cb41ca853~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_340817ece28747e0946e0898f753a135~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_d54073dc58c243f3a45ee217f9105ffe~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_e57c7d2999844872a15714eb1f81aa83~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_e57c7d2999844872a15714eb1f81aa83~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_15b2ebefe65a41d39b1edebd52300982~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e1d2a7073a0246f993d6608eb2350170~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_340817ece28747e0946e0898f753a135~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_15b2ebefe65a41d39b1edebd52300982~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_c54b9d433a4c4f308e8ba3f610c88564~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_c54b9d433a4c4f308e8ba3f610c88564~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_884064feff544bfea1f4e604bbf0a849~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_ebdfe4dbff7a465b8271a8779f2d3685~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_340817ece28747e0946e0898f753a135~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_884064feff544bfea1f4e604bbf0a849~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_488a9eabe57545dfa24420287e8562e0~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_488a9eabe57545dfa24420287e8562e0~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_649451c4dd7645a88bdcf391ecd75cbb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c144de1cfc8e43fc8a74c773bbc5a87f~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_649451c4dd7645a88bdcf391ecd75cbb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_bf8a1ff7c267403a8098889d32ff0c60~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_bf8a1ff7c267403a8098889d32ff0c60~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_a3b2d5896f4b4a828f388995753aa5df~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_37cc82c8d22d4a01b641f15ac7d0a49d~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_a3b2d5896f4b4a828f388995753aa5df~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_667cfb5aa89b48b2bcf6ac07e01a88ce~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_667cfb5aa89b48b2bcf6ac07e01a88ce~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_120b62d1894246e49e719e811ed1392e~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_71eef60e7efd41a6b77555b7b443271c~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_2fbd5f595adb469280bf332177a969e1~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_2842dd99881f411e851aa4c97042fd9f~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_120b62d1894246e49e719e811ed1392e~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
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
      "image": "https://static.wixstatic.com/media/ab07e4_7fca0b09580f49b0b81f9977e6f03f95~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_7fca0b09580f49b0b81f9977e6f03f95~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_55892c19957b4aad9788303e76d65da1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_a96a209145e34f9ab2c706576164e1f0~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_55892c19957b4aad9788303e76d65da1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_304f722842c540979631ebd789b4155b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_304f722842c540979631ebd789b4155b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_304f722842c540979631ebd789b4155b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_e9a04f69a5cb4102928a1d9df311b4ea~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_e9a04f69a5cb4102928a1d9df311b4ea~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_e9a04f69a5cb4102928a1d9df311b4ea~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_c74da63483fd457abb12bbd78c9e133b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_c74da63483fd457abb12bbd78c9e133b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_d42a7fee0556461ba4f95fd19418cda5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_d42a7fee0556461ba4f95fd19418cda5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_960d91bb859145d9876b00777c4f9a2c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_960d91bb859145d9876b00777c4f9a2c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_df254571fd504e7caee0d67d8bd9bcb2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_f43faa8acfa649159c56ae61a58c37f1~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_df254571fd504e7caee0d67d8bd9bcb2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_98e8a1078024479bba115c89d900c744~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_98e8a1078024479bba115c89d900c744~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_285e259650814edd840f9d196e7b3560~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_14eadb7b84804d328803c6534419b66d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_285e259650814edd840f9d196e7b3560~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_285e259650814edd840f9d196e7b3560~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_285e259650814edd840f9d196e7b3560~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_14eadb7b84804d328803c6534419b66d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_99a32d97248b4c759b9fd66b4776e119~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_14eadb7b84804d328803c6534419b66d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_67848912bf6f4035a60b5452acfbfcdf~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_67848912bf6f4035a60b5452acfbfcdf~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_2142c380388e468781b7f5d270055dbb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_cd7d582a7e164ae8bcc5dd110a77e63f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_e8f72cada7c04b9c85f2e5f400b30a35~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_9b02007c6445448a832369961d37bf0d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_c9f2c0de519441f48c8eb0559798613b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_ae7af7b4f9784246b7f06036559ee767~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_bed94059753340f38e9b19b9afbc400d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_567cba56a2b44d329c3bc74f13db3760~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_2142c380388e468781b7f5d270055dbb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_13688ca9b3d14aa5b8ce568664f4000b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_13688ca9b3d14aa5b8ce568664f4000b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_140673b7eefc4463bd6a38eaf3714e6b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_c38d2e102b384bc4bbf3c02e413579ff~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_1dbbeea9086d4328b047fe0c40e1281d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_cc8372ae4ec94e9495caaf3d657c16df~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_2bdc0eee485e470a881634545432f737~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_d3ad2bc2d60340ee8240dd8fa45ea3d8~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_140673b7eefc4463bd6a38eaf3714e6b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_0efe8f4b08ea46aab86e2292fb7ddca0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_0efe8f4b08ea46aab86e2292fb7ddca0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_ab7624f96e804024aef419791b6dde8e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_efc251b688414bb2b9fc643b823271b9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_94e6254461624153a257f85ed2fc9cb2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_19250eec9a294a58825f3d4b690f24dd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_ab7624f96e804024aef419791b6dde8e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_89c111e85e1246d6874ff52013dad94d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_89c111e85e1246d6874ff52013dad94d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_87504109a72c4ad184142c31d5e3fa55~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_73debf3650b34fdbbaa98abc38d16e65~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_c46c850ec96e46a580960d5f4c5626eb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_3307180e66a14661932a24c277675aff~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_b99a0459b4764e13bee53957aa5993e7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_87504109a72c4ad184142c31d5e3fa55~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_3e0b0af91ea24fb2a5f53b41a5112458~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_3e0b0af91ea24fb2a5f53b41a5112458~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_ba27310b633041139ff5f0cf2eae076a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_03f8feb6114a425c86ccf1d0573081a9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_99bf75b246714e18ba46e3ac692378b3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_ba27310b633041139ff5f0cf2eae076a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_43f901cfd5c74909b9e7d0fccd01135a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_43f901cfd5c74909b9e7d0fccd01135a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_18bbe97bdf2241d1bb0862c98f4a81e6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_62ff9161d44e4ec18b1c62334337b9cd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_18bbe97bdf2241d1bb0862c98f4a81e6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_3f24a96ce91f450d92f31bb4091670bb~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_3f24a96ce91f450d92f31bb4091670bb~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_241f0a26369d4aba981020924f335e53~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_e3bc2e45eb924d5ba8af23bae5e3557c~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_e6af035e5e484c6c9330ac99125cfc8c~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_3615f4cbdd354fd58f39b1b43b823a59~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_e7211d0506ab4c5ab16c896fabb34b9b~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_8ab0bf0179ba4337b49e2faac57afbb3~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_ef7f7181046a427399039b68ab4e5074~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_6cf3a971596a41f9a5a09dfe94e970e5~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_c7de441b088d498f9759ed0eebbefafb~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_5efc4d3c7959425c86ee2590453b22b8~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_58f8cb18eeb9414dbd9d723ca84ff6a5~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
        "https://static.wixstatic.com/media/ab07e4_4a8ed561aa374b52898250a3bdc98c00~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_241f0a26369d4aba981020924f335e53~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
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
      "image": "https://static.wixstatic.com/media/ab07e4_b88f4563cf3a4e9baec2aaf7c67fc1f7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_b88f4563cf3a4e9baec2aaf7c67fc1f7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_151ec13249ec4d06a4660e93ca3b8ea9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_bb490ff006e640c1b85e5d18616ea068~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_5ef46c6cbb1743d398e635e01c72e9fa~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_151ec13249ec4d06a4660e93ca3b8ea9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_11bd73e55ebd4f8e859baad963ae90da~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_11bd73e55ebd4f8e859baad963ae90da~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_ea1c6884e72646a1b119b5c33a7360bb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_ea1c6884e72646a1b119b5c33a7360bb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_e44318e59e684af18bed048f152269cb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_e44318e59e684af18bed048f152269cb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_9a18a7c1f1554aa09c61548ac96fc510~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_3c3a66ee0b794d30a3ba27a217997b29~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_d40f5f8539ab4a2097772931bfd6693f~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_766de2319746418eb92135fb05e91fc5~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_9a18a7c1f1554aa09c61548ac96fc510~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_35d71bb0fee942f88faa1e7d9107544b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_35d71bb0fee942f88faa1e7d9107544b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_4f43efd49f734464a92f7cf602f4371a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_f6c40f43ff4e4fa991ec9a4d9bcda877~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_f96a2b0b4f2b498bb029f543b0d2775f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_524964fa06f4462e9d84f9bbeb5cee83~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_4f43efd49f734464a92f7cf602f4371a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_623b7b3b218243719c174f8578c5b8ef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_623b7b3b218243719c174f8578c5b8ef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_623b7b3b218243719c174f8578c5b8ef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_5a061974734648ba9c0129137c77d97e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_5a061974734648ba9c0129137c77d97e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_5a061974734648ba9c0129137c77d97e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_8c0bf67a9dd1465d859e3aab7d9cf0ac~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_8c0bf67a9dd1465d859e3aab7d9cf0ac~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_8c0bf67a9dd1465d859e3aab7d9cf0ac~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_c5f1b20f187d47a898772fc1e2441095~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_c5f1b20f187d47a898772fc1e2441095~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_c5f1b20f187d47a898772fc1e2441095~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_a293691e0e334c35a34a98bbb12dce02~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_a293691e0e334c35a34a98bbb12dce02~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_a293691e0e334c35a34a98bbb12dce02~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_6648d171c57446e08b1f090f34063fe2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_6648d171c57446e08b1f090f34063fe2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_6648d171c57446e08b1f090f34063fe2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_fcf7e2ed4c5e4c478993c3421e321034~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_14d83c871f7844d79fc059b03a358720~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_14d83c871f7844d79fc059b03a358720~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_f8574f110c3c4dc0a2f2544d843f6dfc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_06c6dbef7c84418bbe7df1caed05f9ba~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_f8574f110c3c4dc0a2f2544d843f6dfc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_ffe76db4ecd34aadac9eeaf352cd3eac~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_ffe76db4ecd34aadac9eeaf352cd3eac~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_ffe76db4ecd34aadac9eeaf352cd3eac~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_fd130615f6004feebc463e08b9f8d587~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_fd130615f6004feebc463e08b9f8d587~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_fd130615f6004feebc463e08b9f8d587~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_01f465c2aaf64865a146d72303f4b8ff~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_01f465c2aaf64865a146d72303f4b8ff~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_01f465c2aaf64865a146d72303f4b8ff~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "title": "19” 1U Brush Panel",
      "slug": "19-1u-brush-panel",
      "price": "SGD 30.00",
      "comparePrice": "",
      "image": "https://static.wixstatic.com/media/ab07e4_83a8248d894344eb9e6a78567d4bffad~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_83a8248d894344eb9e6a78567d4bffad~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_83a8248d894344eb9e6a78567d4bffad~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_4766bb432dba4049b7ceb61338cb3cad~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_4766bb432dba4049b7ceb61338cb3cad~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_4766bb432dba4049b7ceb61338cb3cad~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_bdd407d634054a93adbf7356deb8436d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_bdd407d634054a93adbf7356deb8436d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_bdd407d634054a93adbf7356deb8436d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_c47623bc082a4131b0d86066414c49fd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_c47623bc082a4131b0d86066414c49fd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_c47623bc082a4131b0d86066414c49fd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_612e7200b24048d498a883bd3a4b2bb5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_612e7200b24048d498a883bd3a4b2bb5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_612e7200b24048d498a883bd3a4b2bb5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_66e10d1b570c4489b1eff07bbf06cb0f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_66e10d1b570c4489b1eff07bbf06cb0f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_66e10d1b570c4489b1eff07bbf06cb0f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_0e966b8703ef4acca9826e5402752167~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_0e966b8703ef4acca9826e5402752167~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_0e966b8703ef4acca9826e5402752167~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_92229fda177f48b48419a2480570fd0e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_92229fda177f48b48419a2480570fd0e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_92229fda177f48b48419a2480570fd0e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_0104da92c5bd45f3aa4eaf216fd0be35~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_0104da92c5bd45f3aa4eaf216fd0be35~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_0104da92c5bd45f3aa4eaf216fd0be35~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_83a6c5400a6d4d0a841bb9a2e8c288ad~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_83a6c5400a6d4d0a841bb9a2e8c288ad~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_83a6c5400a6d4d0a841bb9a2e8c288ad~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_b17384a242344d998088d21bb6532319~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_b17384a242344d998088d21bb6532319~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_b17384a242344d998088d21bb6532319~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_701d95176d7e4ca2819b35165954891b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_701d95176d7e4ca2819b35165954891b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_d21dc10bb1a44acf86f92d1d39d846be~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_d21dc10bb1a44acf86f92d1d39d846be~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_7ae5d15ceafc47e2a219ae8d1c96626b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_7ae5d15ceafc47e2a219ae8d1c96626b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_7ae5d15ceafc47e2a219ae8d1c96626b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_c742a8e655e94da7b56a643b5be2d6c9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_c742a8e655e94da7b56a643b5be2d6c9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_c742a8e655e94da7b56a643b5be2d6c9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_0596d521291a4c129dc580b6257fea67~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_0596d521291a4c129dc580b6257fea67~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_0596d521291a4c129dc580b6257fea67~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_f33d4cf068384b5ab84f2fb5559de2fa~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_f33d4cf068384b5ab84f2fb5559de2fa~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_f33d4cf068384b5ab84f2fb5559de2fa~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_3ea5f58754214471adb499d60ec47308~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_3ea5f58754214471adb499d60ec47308~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_3ea5f58754214471adb499d60ec47308~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_e4d35c2debe540eca4275452ae23bf2d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_e4d35c2debe540eca4275452ae23bf2d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_e4d35c2debe540eca4275452ae23bf2d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_dc4331cd495b4f34a85123937df00c3a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_dc4331cd495b4f34a85123937df00c3a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_dc4331cd495b4f34a85123937df00c3a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "title": "Tough USB to TTL Serial Cable (3.3V) 3.5mm Audio Jack – 1.8m",
      "slug": "tough-usb-to-ttl-serial-cable-3-3v-3-5mm-audio-jack-1-8m",
      "price": "SGD 22.00",
      "comparePrice": "",
      "image": "https://static.wixstatic.com/media/ab07e4_d4891610bacb4766b9410ac95fcffef5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_d4891610bacb4766b9410ac95fcffef5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_d4891610bacb4766b9410ac95fcffef5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_052c1ff1b2074500bfc8c03f297b226b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_052c1ff1b2074500bfc8c03f297b226b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_052c1ff1b2074500bfc8c03f297b226b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_956253040c1b44d796bac92438e32c02~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_956253040c1b44d796bac92438e32c02~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_956253040c1b44d796bac92438e32c02~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_32ab4aaf003f4b7eaf9297a7df1c0017~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_32ab4aaf003f4b7eaf9297a7df1c0017~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_32ab4aaf003f4b7eaf9297a7df1c0017~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_36ef0beb13aa4c4db0bc8fb09e12e4fd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_36ef0beb13aa4c4db0bc8fb09e12e4fd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_36ef0beb13aa4c4db0bc8fb09e12e4fd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_9452e4f1520d49c29ab16374d283243b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_9452e4f1520d49c29ab16374d283243b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_9452e4f1520d49c29ab16374d283243b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "title": "Tough UK 3pin to Figure 8 Power Cable—1.5meter",
      "slug": "tough-uk-3pin-to-figure-8-power-cable-1-5meter",
      "price": "SGD 8.00",
      "comparePrice": "",
      "image": "https://static.wixstatic.com/media/ab07e4_048cdabac7bb40279097f4a57410ebd0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_048cdabac7bb40279097f4a57410ebd0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_048cdabac7bb40279097f4a57410ebd0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "title": "Tough UK 3Pin L Power Cord – 1.8meter",
      "slug": "tough-uk-3pin-l-power-cord-1-8meter",
      "price": "SGD 12.00",
      "comparePrice": "",
      "image": "https://static.wixstatic.com/media/ab07e4_5e6ad3b4ee1a4b3c9e0e9c9c95ef8166~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_5e6ad3b4ee1a4b3c9e0e9c9c95ef8166~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_5e6ad3b4ee1a4b3c9e0e9c9c95ef8166~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_6489e2308b3e477dbc9e249466643da3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_6489e2308b3e477dbc9e249466643da3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_4facff8f4e5d4f67b1d52d7b06566aeb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_f07ccc87315e49c6bf5ceee0ec0b64a6~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c91bf87df2744f3d880d65d6e8251dcb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_441481f35a7046cb89c2cba9fbe4cc36~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_4facff8f4e5d4f67b1d52d7b06566aeb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_6bd902579994482ebf269c8fd10e9ca6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_6bd902579994482ebf269c8fd10e9ca6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_6bd902579994482ebf269c8fd10e9ca6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_239ea839e86b4c6e99aeb57ed37de465~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_239ea839e86b4c6e99aeb57ed37de465~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_239ea839e86b4c6e99aeb57ed37de465~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_a7bf9c595e414dd283cab5414893ddfb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_a7bf9c595e414dd283cab5414893ddfb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_928badc8abf348b4bc64030af0a39c5a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_928badc8abf348b4bc64030af0a39c5a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_d340887ea92c4f0e8ee5c97d26b369e3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_d340887ea92c4f0e8ee5c97d26b369e3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_d340887ea92c4f0e8ee5c97d26b369e3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_efd0f6b8d8ff4d63ba4717b5223030d2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_efd0f6b8d8ff4d63ba4717b5223030d2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_cc6f770a667b420880d79a1624e02388~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_8779c3fe372a4762bca5adec974425a8~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_cc6f770a667b420880d79a1624e02388~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_b59a650a633e4dbda3b43ce91677a131~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_b59a650a633e4dbda3b43ce91677a131~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_b59a650a633e4dbda3b43ce91677a131~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_8bbdfb3b257f4553b1627416efe1ac4e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_8bbdfb3b257f4553b1627416efe1ac4e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_8bbdfb3b257f4553b1627416efe1ac4e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_a11e2608fe594b069e19fe4db94eded7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_a11e2608fe594b069e19fe4db94eded7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_a11e2608fe594b069e19fe4db94eded7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_efb9a21de35649a88c42a1f7cccb9e3b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_efb9a21de35649a88c42a1f7cccb9e3b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_efb9a21de35649a88c42a1f7cccb9e3b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_548463f73d7a43aa9b8336d8e7a7aada~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_548463f73d7a43aa9b8336d8e7a7aada~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_548463f73d7a43aa9b8336d8e7a7aada~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_7af94b05e1124c91a269549d560a00a6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_7af94b05e1124c91a269549d560a00a6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_7af94b05e1124c91a269549d560a00a6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_4907e8efd87d49268d51e273700d74ff~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_4907e8efd87d49268d51e273700d74ff~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_4907e8efd87d49268d51e273700d74ff~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_0e96685bd8544a2bb466e1f59971daef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_0e96685bd8544a2bb466e1f59971daef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_0e96685bd8544a2bb466e1f59971daef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_05fc71f247874204886f9e5b1f6918db~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_05fc71f247874204886f9e5b1f6918db~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_05fc71f247874204886f9e5b1f6918db~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "title": "Cat.7 FTP RJ45 Patch Cord - Straight Cable – Black",
      "slug": "cat-7-ftp-rj45-patch-cord-straight-cable-black",
      "price": "SGD 12.00",
      "comparePrice": "",
      "image": "https://static.wixstatic.com/media/ab07e4_6d36720d5c18417aa1d67b0b2e93689f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_6d36720d5c18417aa1d67b0b2e93689f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_f5558cba075543289d21800b671e24d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_f5558cba075543289d21800b671e24d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_cd02889d5c9543658103bf7348b51d7c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_cd02889d5c9543658103bf7348b51d7c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_82eb38089efc4acf9154e693920877b5~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_82eb38089efc4acf9154e693920877b5~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_ba8dcbdb762a409780df969312f05936~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_ba8dcbdb762a409780df969312f05936~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_ad974cdcf29441fba0d823fd68a1da55~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_ad974cdcf29441fba0d823fd68a1da55~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "title": "C5 Cloverleaf to UK 3Pin Power Cord – 1.8meter",
      "slug": "c5-cloverleaf-to-uk-3pin-power-cord-1-8meter",
      "price": "SGD 13.00",
      "comparePrice": "",
      "image": "https://static.wixstatic.com/media/ab07e4_d18a3f2e23c14207aa05e759fff06a79~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_d18a3f2e23c14207aa05e759fff06a79~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_24f6f8f20a0a4cab954c7e4b8bb2d4fb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_c479e8228d7f4c3f9bb28c66b50c1ea3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_24f6f8f20a0a4cab954c7e4b8bb2d4fb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_466e2212c2a54fc08118a68a63397713~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_466e2212c2a54fc08118a68a63397713~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_7878b9299fb34412b95acdba4ed8cc0b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_ab1b8c6eac2841bcbec387ef25cafce9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_7878b9299fb34412b95acdba4ed8cc0b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "title": "C13-C14 copper Extension Power Cord  – 2meter,",
      "slug": "c13-c14-copper-extension-power-cord-2meter",
      "price": "SGD 22.00",
      "comparePrice": "",
      "image": "https://static.wixstatic.com/media/ab07e4_0b9a280cbb774ba2baa28c182ac225d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_0b9a280cbb774ba2baa28c182ac225d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_08a7855482df475bb9a2f299b739c45b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_08a7855482df475bb9a2f299b739c45b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_0b9a280cbb774ba2baa28c182ac225d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_0b9a280cbb774ba2baa28c182ac225d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_08a7855482df475bb9a2f299b739c45b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_08a7855482df475bb9a2f299b739c45b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_08a7855482df475bb9a2f299b739c45b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_08a7855482df475bb9a2f299b739c45b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_0b9a280cbb774ba2baa28c182ac225d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_0b9a280cbb774ba2baa28c182ac225d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_1eaa11d8edd24052a777b932c26d83e7~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_1eaa11d8edd24052a777b932c26d83e7~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_1eaa11d8edd24052a777b932c26d83e7~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_117cecd329f54b77a92dcb7c19f4000d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_117cecd329f54b77a92dcb7c19f4000d~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_117cecd329f54b77a92dcb7c19f4000d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_c63ce21f5e234e5aade4a4e0953c72dc~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_c63ce21f5e234e5aade4a4e0953c72dc~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_c63ce21f5e234e5aade4a4e0953c72dc~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_04fc72a041ec44a48b139956f43aaeda~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_04fc72a041ec44a48b139956f43aaeda~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_41d596a124ca497cad8334dfd5ae73cc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_2521c36bdf7c411582c23a58587b0442~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_035bfce1eac946b880944f4d37752419~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_41d596a124ca497cad8334dfd5ae73cc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_4c51de1f447a4d9a9c56a762a7edbfd3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_4c51de1f447a4d9a9c56a762a7edbfd3~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_4c51de1f447a4d9a9c56a762a7edbfd3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_a38c5bc306404c36af407418d61a5257~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_a38c5bc306404c36af407418d61a5257~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_a38c5bc306404c36af407418d61a5257~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_fab1f6f4f3c74d71abfd0b427cb11835~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_fab1f6f4f3c74d71abfd0b427cb11835~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_fab1f6f4f3c74d71abfd0b427cb11835~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_f4a18622a967496fa701a9db4c9a39f9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_f4a18622a967496fa701a9db4c9a39f9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_f4a18622a967496fa701a9db4c9a39f9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_bbf1a20a93c54e53a98560a3fec9ac53~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_bbf1a20a93c54e53a98560a3fec9ac53~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_bbf1a20a93c54e53a98560a3fec9ac53~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_5de229f5796e4cb2a62b649018aef202~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_5de229f5796e4cb2a62b649018aef202~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_5de229f5796e4cb2a62b649018aef202~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_498f33d348ce41859c743277bbfd18f0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_498f33d348ce41859c743277bbfd18f0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_498f33d348ce41859c743277bbfd18f0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_e041e08b2e1e4e7280d25f3c119186f5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_e041e08b2e1e4e7280d25f3c119186f5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_e041e08b2e1e4e7280d25f3c119186f5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_388b8c07f1d8493ca2cd00996da3326b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_388b8c07f1d8493ca2cd00996da3326b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_388b8c07f1d8493ca2cd00996da3326b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_3124930a9df141d89726b6e24f3dd001~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_3124930a9df141d89726b6e24f3dd001~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_0098786a494f48559695be876fa18a16~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_9efe75cedb434e849618a9193dd65a37~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_0098786a494f48559695be876fa18a16~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_c378db9428444260a892f4964c94ad88~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_c378db9428444260a892f4964c94ad88~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_ffe0cba04fce4a2e9d5d4c12c91de7f0~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_d4c608de88544bdd848448e11f1b261d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e16b8ae88c014e568a40923c48f9f7a1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_b39cca86b31d4aa1bd896a2067246579~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_0b91b09450cc485892ea1f665888e220~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_724874afac5a4177947012aa342afe4d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/f78599_195c183044114fb3b2e02b31bd77f7c7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_ffe0cba04fce4a2e9d5d4c12c91de7f0~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_b39cca86b31d4aa1bd896a2067246579~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_b39cca86b31d4aa1bd896a2067246579~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_0b91b09450cc485892ea1f665888e220~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_ffe0cba04fce4a2e9d5d4c12c91de7f0~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_d4c608de88544bdd848448e11f1b261d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c378db9428444260a892f4964c94ad88~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_724874afac5a4177947012aa342afe4d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e16b8ae88c014e568a40923c48f9f7a1~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_0b91b09450cc485892ea1f665888e220~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_e1fb582b0a9b4f0aae0f458dca40a2a2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_e1fb582b0a9b4f0aae0f458dca40a2a2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_961f34f4726b41bc9fb3221a8b6b5072~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_dea40f5332184db492561267ea919562~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_59e06ac81e7c49609b1ecffb21fcd2bb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_98ebeebec7784d839ffbdbb31d50f970~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_f7c2d96e86ee4540a44e79715fed8131~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_8a96b7f836224504b677d8e66925073c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/f78599_195c183044114fb3b2e02b31bd77f7c7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_961f34f4726b41bc9fb3221a8b6b5072~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_c378db9428444260a892f4964c94ad88~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_c378db9428444260a892f4964c94ad88~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_0b91b09450cc485892ea1f665888e220~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e16b8ae88c014e568a40923c48f9f7a1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_b39cca86b31d4aa1bd896a2067246579~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_ffe0cba04fce4a2e9d5d4c12c91de7f0~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_d4c608de88544bdd848448e11f1b261d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_724874afac5a4177947012aa342afe4d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/f78599_195c183044114fb3b2e02b31bd77f7c7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_0b91b09450cc485892ea1f665888e220~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_e1fb582b0a9b4f0aae0f458dca40a2a2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_e1fb582b0a9b4f0aae0f458dca40a2a2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_dea40f5332184db492561267ea919562~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_59e06ac81e7c49609b1ecffb21fcd2bb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_98ebeebec7784d839ffbdbb31d50f970~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_f7c2d96e86ee4540a44e79715fed8131~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_961f34f4726b41bc9fb3221a8b6b5072~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_8a96b7f836224504b677d8e66925073c~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_dea40f5332184db492561267ea919562~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_e1fb582b0a9b4f0aae0f458dca40a2a2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_e1fb582b0a9b4f0aae0f458dca40a2a2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_961f34f4726b41bc9fb3221a8b6b5072~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_dea40f5332184db492561267ea919562~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_59e06ac81e7c49609b1ecffb21fcd2bb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_98ebeebec7784d839ffbdbb31d50f970~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_f7c2d96e86ee4540a44e79715fed8131~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_8a96b7f836224504b677d8e66925073c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/f78599_195c183044114fb3b2e02b31bd77f7c7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_961f34f4726b41bc9fb3221a8b6b5072~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_d66c3de1e1664dff913bdb8d50396760~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_d66c3de1e1664dff913bdb8d50396760~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_04fcd54789444d12a0602ae1b8e6a772~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e2a60abdfefc427d9480030225e09eb4~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e261ac2072ba4431a9959407cdcbf74e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_70c6d39ad8d14dcea57aacd9ccc377f3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_465c7c85569d47408e8830c1a782cbb6~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_04fcd54789444d12a0602ae1b8e6a772~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_d66c3de1e1664dff913bdb8d50396760~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_d66c3de1e1664dff913bdb8d50396760~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_04fcd54789444d12a0602ae1b8e6a772~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e261ac2072ba4431a9959407cdcbf74e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e2a60abdfefc427d9480030225e09eb4~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_70c6d39ad8d14dcea57aacd9ccc377f3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_465c7c85569d47408e8830c1a782cbb6~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_04fcd54789444d12a0602ae1b8e6a772~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_4855637dab504d7e8e16b8a2284b224b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_4855637dab504d7e8e16b8a2284b224b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e640632b6e4146449cc08700916bd63b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_f2fafa6f49674cbc9d71ea49545b835c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_50dc092c909e4c1f9ea8a2693e23469b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c9f31f5c1fe442b99fc0f2a93ddeb64e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_fc231733a2db45bdb3bf7319783dc3eb~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_e640632b6e4146449cc08700916bd63b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_d66c3de1e1664dff913bdb8d50396760~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_d66c3de1e1664dff913bdb8d50396760~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_04fcd54789444d12a0602ae1b8e6a772~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e2a60abdfefc427d9480030225e09eb4~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e261ac2072ba4431a9959407cdcbf74e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_70c6d39ad8d14dcea57aacd9ccc377f3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_465c7c85569d47408e8830c1a782cbb6~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_04fcd54789444d12a0602ae1b8e6a772~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_d66c3de1e1664dff913bdb8d50396760~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_d66c3de1e1664dff913bdb8d50396760~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_04fcd54789444d12a0602ae1b8e6a772~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e2a60abdfefc427d9480030225e09eb4~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e261ac2072ba4431a9959407cdcbf74e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_70c6d39ad8d14dcea57aacd9ccc377f3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_465c7c85569d47408e8830c1a782cbb6~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_04fcd54789444d12a0602ae1b8e6a772~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_a2cd896e2391468f925c794d9f9bf938~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_a2cd896e2391468f925c794d9f9bf938~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_0a07f5eb208b42a2afe4df7bf4a8a736~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_d2c8c11b28064285b4716e902240e679~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_d8057c00e4c540fdb86214eac8db9760~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_44f2b3fc0fa24ff69e233e8bbc0d583b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_7b0ae2dbff654740a5df4e942cde917d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_d2418e13694540aba2cee9168dc9f445~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_0a07f5eb208b42a2afe4df7bf4a8a736~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_6b8ee1aaefe34fb49c14baf2f541aaf2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_6b8ee1aaefe34fb49c14baf2f541aaf2~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_290e11e71859493b9fbada518f3ce47a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_0a7288d29f1342f897eeff493a5e738b~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_0baca75fe7a048ac85a2e73a284c46b3~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_c5eff2cf463f4bbaa15e86195169457e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_26fb3f394e714e7390ec63a69b9b128c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_96f854db84e14b738fc91d619510e1ad~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_290e11e71859493b9fbada518f3ce47a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_02196c4ba6474ee8a3088b52cb939bef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_02196c4ba6474ee8a3088b52cb939bef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_5ed79d414d06445784e2ad380e2148de~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_dce624765cbe411b91339808c33ce51c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_6c84b0bd21664a259019d7591df085ef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_52be359a590e450f80a6cfde19a05482~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_1f105c3988bd4deaa770fd0b7ad62ec6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_5a773779deda4efabadb68a8918670a2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_5ed79d414d06445784e2ad380e2148de~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_02196c4ba6474ee8a3088b52cb939bef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_02196c4ba6474ee8a3088b52cb939bef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_5ed79d414d06445784e2ad380e2148de~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_6c84b0bd21664a259019d7591df085ef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_1f105c3988bd4deaa770fd0b7ad62ec6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_52be359a590e450f80a6cfde19a05482~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_dce624765cbe411b91339808c33ce51c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_5a773779deda4efabadb68a8918670a2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_5ed79d414d06445784e2ad380e2148de~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_aec66010de7f41c4a8f43963d177c334~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_aec66010de7f41c4a8f43963d177c334~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_f72ab575b6fc4f5aa303015fb75837c1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_03017cac47ea437ca55361142eb8eaee~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_3f7363a4b6c3461cb9f17590aadf4ff4~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_d47a0edbde58489d854e3326ddfcfe1c~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_f72ab575b6fc4f5aa303015fb75837c1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_02196c4ba6474ee8a3088b52cb939bef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_02196c4ba6474ee8a3088b52cb939bef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_6c84b0bd21664a259019d7591df085ef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_1f105c3988bd4deaa770fd0b7ad62ec6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_5ed79d414d06445784e2ad380e2148de~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_52be359a590e450f80a6cfde19a05482~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_dce624765cbe411b91339808c33ce51c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_5a773779deda4efabadb68a8918670a2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_6c84b0bd21664a259019d7591df085ef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_02196c4ba6474ee8a3088b52cb939bef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_02196c4ba6474ee8a3088b52cb939bef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_5ed79d414d06445784e2ad380e2148de~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_1f105c3988bd4deaa770fd0b7ad62ec6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_6c84b0bd21664a259019d7591df085ef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_52be359a590e450f80a6cfde19a05482~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_dce624765cbe411b91339808c33ce51c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_5a773779deda4efabadb68a8918670a2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_5ed79d414d06445784e2ad380e2148de~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_192aed9634aa445baf798975f77db0dc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_192aed9634aa445baf798975f77db0dc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_7a508148c7954657bdd7af5db353ca33~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_7a508148c7954657bdd7af5db353ca33~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/f78599_db3afec22450406eb290fd648e3644a2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/f78599_db3afec22450406eb290fd648e3644a2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_7a508148c7954657bdd7af5db353ca33~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_7a508148c7954657bdd7af5db353ca33~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/f78599_db3afec22450406eb290fd648e3644a2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/f78599_db3afec22450406eb290fd648e3644a2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_7a508148c7954657bdd7af5db353ca33~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_7a508148c7954657bdd7af5db353ca33~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/f78599_db3afec22450406eb290fd648e3644a2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/f78599_db3afec22450406eb290fd648e3644a2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_7a508148c7954657bdd7af5db353ca33~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_7a508148c7954657bdd7af5db353ca33~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/f78599_000bd699977841bf89f9054e34e5acdc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/f78599_000bd699977841bf89f9054e34e5acdc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_e68bd35aae564b2790471f99caeff8d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_7ee74c7df37240afb91dfde9f095f9c0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_e68bd35aae564b2790471f99caeff8d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/f78599_000bd699977841bf89f9054e34e5acdc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/f78599_000bd699977841bf89f9054e34e5acdc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_e68bd35aae564b2790471f99caeff8d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_7ee74c7df37240afb91dfde9f095f9c0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_e68bd35aae564b2790471f99caeff8d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/f78599_000bd699977841bf89f9054e34e5acdc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/f78599_000bd699977841bf89f9054e34e5acdc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_e68bd35aae564b2790471f99caeff8d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_7ee74c7df37240afb91dfde9f095f9c0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_e68bd35aae564b2790471f99caeff8d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/f78599_000bd699977841bf89f9054e34e5acdc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/f78599_000bd699977841bf89f9054e34e5acdc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_e68bd35aae564b2790471f99caeff8d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_7ee74c7df37240afb91dfde9f095f9c0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_e68bd35aae564b2790471f99caeff8d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/f78599_46d224de22b54f1f9c4b6ade0e399152~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/f78599_46d224de22b54f1f9c4b6ade0e399152~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_bfa4a9d2fa824534ade577dd166f17d8~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_5b10734fe8174991ad26ea0fc7486c80~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_e096760c2d674f5d89dab36e83cc0483~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_4288f5a88df84c16a44b3c9c2b9bcdd5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_bfa4a9d2fa824534ade577dd166f17d8~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/f78599_46d224de22b54f1f9c4b6ade0e399152~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/f78599_46d224de22b54f1f9c4b6ade0e399152~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_bfa4a9d2fa824534ade577dd166f17d8~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_5b10734fe8174991ad26ea0fc7486c80~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_e096760c2d674f5d89dab36e83cc0483~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_4288f5a88df84c16a44b3c9c2b9bcdd5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_bfa4a9d2fa824534ade577dd166f17d8~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/f78599_6caa532ebcbd4532a2a46abaa33d7f41~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/f78599_6caa532ebcbd4532a2a46abaa33d7f41~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_b24352a6c72944b8a034b67ca3bdc219~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/f78599_88d1effc22c447dda85d14cbac1fbf10~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_be3466b1afa94134b319d4a2d373b90c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_7b9e927ad0374b04852b338c30c1a8d4~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_1eb0c436b11d49e39f2698ed8980f1d0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_b24352a6c72944b8a034b67ca3bdc219~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/f78599_6caa532ebcbd4532a2a46abaa33d7f41~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/f78599_6caa532ebcbd4532a2a46abaa33d7f41~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_b24352a6c72944b8a034b67ca3bdc219~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/f78599_88d1effc22c447dda85d14cbac1fbf10~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_be3466b1afa94134b319d4a2d373b90c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_7b9e927ad0374b04852b338c30c1a8d4~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/f78599_1eb0c436b11d49e39f2698ed8980f1d0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/f78599_b24352a6c72944b8a034b67ca3bdc219~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
      "image": "https://static.wixstatic.com/media/ab07e4_d61c4657ae974e138f8ac37e2e081eaa~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_d61c4657ae974e138f8ac37e2e081eaa~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_7453064d13404bf0bb71ac3372a268ce~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_fd718503f405439f8feec3b92899a49e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_f2022c76b8e943529bf8079804030c8d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_c7833e0df9944a9d98a00d70a3c0fc00~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_080dd64dab574dba85ed8605d88aebec~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_7453064d13404bf0bb71ac3372a268ce~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_65d0c79da2c64384b1623688af6adc3c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_65d0c79da2c64384b1623688af6adc3c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_d542b3dfddbe421b89f239e43aecea75~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_40127e2e6baf430890d9acbdff16b9ac~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_5418833669c94663aededaf20223439d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_c148aa2c68434284846fba1d7e8de7d1~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        "https://static.wixstatic.com/media/ab07e4_bfe2d01301c346b183a2a2d0abe97278~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_d542b3dfddbe421b89f239e43aecea75~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
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
      "image": "https://static.wixstatic.com/media/ab07e4_9a557415f9064407b4b02e858e8205c8~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      "galleryImages": [
        "https://static.wixstatic.com/media/ab07e4_9a557415f9064407b4b02e858e8205c8~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_dec3353012be47ce9069e1d5cd3adb79~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_592da51988b24bcba702ca8937cf8067~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_27b02d4a783e4557bc70101855d481e1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_e982f735ec724408a7f2e5c211e1e660~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "https://static.wixstatic.com/media/ab07e4_5441f7ffd44940ab9c04e46e684516f6~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
      ],
      "hoverImage": "https://static.wixstatic.com/media/ab07e4_dec3353012be47ce9069e1d5cd3adb79~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
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
