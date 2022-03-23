const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const brands = await prisma.brand.createMany({
    data: [
      { name: 'Apple' },
      { name: 'Samsung' },
      { name: 'Google' },
      { name: 'LG' },
    ],
  });

  const os = await prisma.os.createMany({
    data: [{ name: 'iOS' }, { name: 'Android' }],
  });

  const Color = await prisma.color.createMany({
    data: [
      { name: 'Grey' },
      { name: 'Pink' },
      { name: 'Black' },
      { name: 'Green' },
      { name: 'Red' },
      { name: 'White' },
      { name: 'Blue' },
      { name: 'Purple' },
    ],
  });

  const Feature = await prisma.feature.createMany({
    data: [
      { name: 'Wireless Charging' },
      { name: 'Memory Expandable' },
      { name: 'Fast Charger' },
      { name: '4G' },
      { name: '5G' },
      { name: 'USB-C Connector' },
    ],
  });

  const Storage = await prisma.storage.createMany({
    data: [
      { capacity: '64GB' },
      { capacity: '128GB' },
      { capacity: '256GB' },
      { capacity: '512GB' },
    ],
  });

  console.log({ brands, os, Color, Storage, Feature });
}

async function products() {
  const iphone12Mini = await prisma.product.create({
    data: {
      slug: 'iphone-12-mini',
      name: 'iPhone 12 mini',
      thumbnail:
        'https://portfolioapps31.blob.core.windows.net/react-store-products/iphone-12-mini.png',
      shortDescription:
        'iPhone 12 Mini, 5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display',
      description:
        'The best iPhone display ever for incredible contrast and higher resolution. With Ceramic Shield, which has four times better drop performance. Superfast speeds. Superlow latency. So you can get faster downloads, better-quality video streaming, more responsive gaming and real-time interactivity. A14 Bionic is the fastest chip in a smartphone. With a 16-core Neural Engine, it crunches trillions of operations each second. And it’s superefficient for great battery life.',
      screenSize: 5.4,
      talkTime: 18,
      standByTime: 32,
      brand: {
        connect: { id: '05f39448-1c28-4ff0-904c-1fef609f8ca3' },
      },
      os: {
        connect: { id: 'f6620755-0248-4e93-b676-7a801d91fefb' },
      },
      images: {
        create: [
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-iphone12mini/iphone-12-mini.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-iphone12mini/iPhone-12-mini1.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-iphone12mini/iPhone-12-mini2.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-iphone12mini/iPhone-12-mini3.png',
          },
        ],
      },
      features: {
        connect: [
          { id: '0726b744-2000-40d5-9eae-5fef010492b1' },
          { id: '5037eb07-8410-403b-9b68-ed9c8203640e' },
        ],
      },
      variants: {
        create: [
          {
            color: { connect: { id: '7c3d5843-f63d-4586-9919-6c5b2bfaf65d' } },
            capacity: {
              connect: { id: '1590199d-501c-41e7-8e5c-51d5ba931648' },
            },
            price: 1008,
          },
          {
            color: { connect: { id: '7c3d5843-f63d-4586-9919-6c5b2bfaf65d' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1080,
          },
          {
            color: { connect: { id: '7c3d5843-f63d-4586-9919-6c5b2bfaf65d' } },
            capacity: {
              connect: { id: 'ad173392-ee4e-46d1-8427-a374c108be02' },
            },
            price: 1225,
          },
          {
            color: { connect: { id: '662f75c1-8e4a-42ea-8c45-299dc474e15c' } },
            capacity: {
              connect: { id: '1590199d-501c-41e7-8e5c-51d5ba931648' },
            },
            price: 1008,
          },
          {
            color: { connect: { id: '662f75c1-8e4a-42ea-8c45-299dc474e15c' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1080,
          },
          {
            color: { connect: { id: '662f75c1-8e4a-42ea-8c45-299dc474e15c' } },
            capacity: {
              connect: { id: 'ad173392-ee4e-46d1-8427-a374c108be02' },
            },
            price: 1225,
          },
          {
            color: { connect: { id: 'da969b6e-bc53-4861-b972-c36a8ce91b71' } },
            capacity: {
              connect: { id: '1590199d-501c-41e7-8e5c-51d5ba931648' },
            },
            price: 1008,
          },
          {
            color: { connect: { id: 'da969b6e-bc53-4861-b972-c36a8ce91b71' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1080,
          },
          {
            color: { connect: { id: 'da969b6e-bc53-4861-b972-c36a8ce91b71' } },
            capacity: {
              connect: { id: 'ad173392-ee4e-46d1-8427-a374c108be02' },
            },
            price: 1225,
          },
          {
            color: { connect: { id: '2948e7a5-c8c9-4e31-bccc-034a7e78654a' } },
            capacity: {
              connect: { id: '1590199d-501c-41e7-8e5c-51d5ba931648' },
            },
            price: 1008,
          },
          {
            color: { connect: { id: '2948e7a5-c8c9-4e31-bccc-034a7e78654a' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1080,
          },
          {
            color: { connect: { id: '2948e7a5-c8c9-4e31-bccc-034a7e78654a' } },
            capacity: {
              connect: { id: 'ad173392-ee4e-46d1-8427-a374c108be02' },
            },
            price: 1225,
          },
        ],
      },
    },
  });

  const galaxyNote = await prisma.product.create({
    data: {
      slug: 'samsung-galaxy-note-20',
      name: 'Samsung Galaxy Note20',
      thumbnail:
        'https://portfolioapps31.blob.core.windows.net/react-store-products/galaxy-note20.png',
      shortDescription:
        "This isn't the time to slow down, this is the time to forge ahead and take the opportunities that come your way.",
      description:
        "This isn't the time to slow down, this is the time to forge ahead and take the opportunities that come your way. You don’t need a smartphone. You need a power phone. One as beautiful as it is intelligent with a pen that is mighty, a battery that doesn't leave you hanging and is as well-connected as you are. The Galaxy Note20 5G and Galaxy Note20 Ultra 5G take power to the next level with cutting-edge technology, letting you master whatever you choose to do next. The Galaxy Note20 5G and Galaxy Note20 Ultra 5G have a big battery. Big enough to last all day. But that's not all, it's also intelligent. The Galaxy Note20 5G and Galaxy Note20 Ultra 5G intuitively manage your app usage to conserve energy on its own so you don't need to. Rest assured that you can tackle those emails during the day and be left with enough power to tackle your opponents at night. And if you are running low on battery, get hours of power from minutes of charge with Super Fast Charging.",
      screenSize: 7,
      talkTime: 18,
      standByTime: 32,
      brand: {
        connect: { id: 'cba10271-598e-45f4-9774-306e660520a3' },
      },
      os: {
        connect: { id: 'a06c0de6-3c8b-4675-84be-1e6b6300b3de' },
      },
      images: {
        create: [
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxynote20/galaxy-note20.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxynote20/galaxy-note20_1.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxynote20/galaxy-note20_2.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxynote20/galaxy-note20_3.png',
          },
        ],
      },
      features: {
        connect: [
          { id: 'f4430251-60dc-4ada-91eb-4857adafe580' },
          { id: '0726b744-2000-40d5-9eae-5fef010492b1' },
          { id: '72850cbe-5e72-463c-b98f-c88278fef777' },
          { id: 'afcbfe47-66c9-40a4-abb2-472e083b983c' },
        ],
      },
      variants: {
        create: [
          {
            color: { connect: { id: 'a53c778b-2ff5-45ae-9ea8-163bbbd77207' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 2250,
          },
        ],
      },
    },
  });

  const pixel5 = await prisma.product.create({
    data: {
      slug: 'google-pixel-5',
      name: 'Google Pixel 5',
      thumbnail:
        'https://portfolioapps31.blob.core.windows.net/react-store-products/google-pixel-5.png',
      shortDescription:
        'Pixel 5, The best of Google in 5G. Have a photo shoot day or night, capture moments with stunning clarity, and take clips with Hollywood-inspired effects.',
      description:
        'With 5G,you can download your favourite movies on the go and start watching before you know it. Go from game time to show time, all in crystal clear HD. Pixel’s 5G hotspot is powerful enough to keep multiple devices connected at once. HDR+ automatically enhances colour and lighting, so the photos that you take stay as vivid as you remember. With HD Duo screen sharing, you can read articles, watch live sports, and laugh together as if you were sitting in the same room. Adaptive Battery reduces power to the apps that you rarely use, so your mobile phone keeps its charge all day.',
      screenSize: 5.9,
      talkTime: 18,
      standByTime: 32,
      brand: {
        connect: { id: '35b207da-8dfd-4cec-9ebe-d8c1b312a5ce' },
      },
      os: {
        connect: { id: 'a06c0de6-3c8b-4675-84be-1e6b6300b3de' },
      },
      images: {
        create: [
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-google5/google-pixel5.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-google5/google-pixel5_1.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-google5/google-pixel5_2.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-google5/google-pixel5_3.png',
          },
        ],
      },
      features: {
        connect: [
          { id: '0726b744-2000-40d5-9eae-5fef010492b1' },
          { id: 'afcbfe47-66c9-40a4-abb2-472e083b983c' },
          { id: '522ffa8f-71e0-4395-9220-dbbcc61c0a6a' },
        ],
      },
      variants: {
        create: [
          {
            color: { connect: { id: 'a53c778b-2ff5-45ae-9ea8-163bbbd77207' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 950,
          },
        ],
      },
    },
  });

  const galaxyS21U = await prisma.product.create({
    data: {
      slug: 'samsung-galaxy-s21-ultra',
      name: 'Samsung Galaxy S21 Ultra',
      thumbnail:
        'https://portfolioapps31.blob.core.windows.net/react-store-products/galaxy-s21-ultra.png',
      shortDescription:
        "Spontaneity, now captured from multiple angles. A camera so good, everyone's a pro. All-day battery, and then some. Trust us, you'll look amazing in 8K video.",
      description:
        "Create share-ready GIFs and videos in one take1 or pick your favourite moments and pull your favorite stills in super high res to share with your followers. Zoom in close, take photos and videos like a pro, and capture incredible share-ready moments with our easy-to-use, multi-lens camera. Power every scroll, click, tap, and stream all day long and then some with an intelligent battery that works with you, not against you. A night out. Your best friend's birthday party. Family moments you'll want to remember forever. Capture your life's best moments in head-turning, super smooth 8K video.",
      screenSize: 7,
      talkTime: 18,
      standByTime: 32,
      brand: {
        connect: { id: 'cba10271-598e-45f4-9774-306e660520a3' },
      },
      os: {
        connect: { id: 'a06c0de6-3c8b-4675-84be-1e6b6300b3de' },
      },
      images: {
        create: [
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxys21ultra/samsung-s21-ultra.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxys21ultra/samsung-s21-ultra1.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxys21ultra/samsung-s21-ultra2.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxys21ultra/samsung-s21-ultra3.png',
          },
        ],
      },
      features: {
        connect: [
          { id: 'f4430251-60dc-4ada-91eb-4857adafe580' },
          { id: '0726b744-2000-40d5-9eae-5fef010492b1' },
          { id: '5037eb07-8410-403b-9b68-ed9c8203640e' },
          { id: '522ffa8f-71e0-4395-9220-dbbcc61c0a6a' },
        ],
      },
      variants: {
        create: [
          {
            color: { connect: { id: 'a53c778b-2ff5-45ae-9ea8-163bbbd77207' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 2040,
          },
          {
            color: { connect: { id: 'a53c778b-2ff5-45ae-9ea8-163bbbd77207' } },
            capacity: {
              connect: { id: 'ad173392-ee4e-46d1-8427-a374c108be02' },
            },
            price: 2125,
          },
        ],
      },
    },
  });

  const iphone12ProMax = await prisma.product.create({
    data: {
      slug: 'iphone-12-pro-max',
      name: 'iPhone 12 Pro Max',
      thumbnail:
        'https://portfolioapps31.blob.core.windows.net/react-store-products/iphone-12-pro-max.png',
      shortDescription:
        'iPhone 12 Pro Max, 5G speed. A14 Bionic, the fastest chip in a smartphone. And a Pro camera system that takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max.',
      description:
        'The Super Retina XDR display goes edge to edge. With Ceramic Shield, which has four times better drop performance. Superfast speeds. Superlow latency. So you can get faster downloads, better-quality video streaming, more responsive gaming and real-time interactivity. Introducing the first 5-nanometre chip in the industry. Which means more speed, more power and more efficiency. LiDAR creates accurate depth maps in nanoseconds, so objects are placed instantly and more accurately in AR experiences.',
      screenSize: 6.7,
      talkTime: 18,
      standByTime: 32,
      brand: {
        connect: { id: '05f39448-1c28-4ff0-904c-1fef609f8ca3' },
      },
      os: {
        connect: { id: 'f6620755-0248-4e93-b676-7a801d91fefb' },
      },
      images: {
        create: [
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-iphone12promax/iphone12-pro.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-iphone12promax/iphone12-pro1.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-iphone12promax/iphone12-pro2.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-iphone12promax/iphone12-pro3.png',
          },
        ],
      },
      features: {
        connect: [
          { id: 'f4430251-60dc-4ada-91eb-4857adafe580' },
          { id: '0726b744-2000-40d5-9eae-5fef010492b1' },
          { id: '5037eb07-8410-403b-9b68-ed9c8203640e' },
          { id: 'afcbfe47-66c9-40a4-abb2-472e083b983c' },
        ],
      },
      variants: {
        create: [
          {
            color: { connect: { id: '7c3d5843-f63d-4586-9919-6c5b2bfaf65d' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1596,
          },
          {
            color: { connect: { id: '7c3d5843-f63d-4586-9919-6c5b2bfaf65d' } },
            capacity: {
              connect: { id: 'ad173392-ee4e-46d1-8427-a374c108be02' },
            },
            price: 1740,
          },
          {
            color: { connect: { id: '662f75c1-8e4a-42ea-8c45-299dc474e15c' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1596,
          },
          {
            color: { connect: { id: '662f75c1-8e4a-42ea-8c45-299dc474e15c' } },
            capacity: {
              connect: { id: 'ad173392-ee4e-46d1-8427-a374c108be02' },
            },
            price: 1740,
          },
          {
            color: { connect: { id: '662f75c1-8e4a-42ea-8c45-299dc474e15c' } },
            capacity: {
              connect: { id: '6cbcacf6-dd23-48f0-9c76-5b457f428e2d' },
            },
            price: 2016,
          },
        ],
      },
    },
  });

  const iphone12 = await prisma.product.create({
    data: {
      slug: 'iphone-12',
      name: 'iPhone 12',
      thumbnail:
        'https://portfolioapps31.blob.core.windows.net/react-store-products/iphone-12.png',
      shortDescription:
        'iPhone 12, 5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.. And Night mode on every camera.',
      description:
        'The best iPhone display ever for incredible contrast and higher resolution. With Ceramic Shield, which has four times better drop performance. Superfast speeds. Superlow latency. So you can get faster downloads, better-quality video streaming, more responsive gaming and real-time interactivity.A14 Bionic is the fastest chip in a smartphone. With a 16-core Neural Engine, it crunches trillions of operations each second. And it’s superefficient for great battery life.',
      screenSize: 6.1,
      talkTime: 18,
      standByTime: 32,
      brand: {
        connect: { id: '05f39448-1c28-4ff0-904c-1fef609f8ca3' },
      },
      os: {
        connect: { id: 'f6620755-0248-4e93-b676-7a801d91fefb' },
      },
      images: {
        create: [
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-iphone12/iphone-12.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-iphone12/iphone-12_1.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-iphone12/iphone-12_2.png',
          },
        ],
      },
      features: {
        connect: [
          { id: 'f4430251-60dc-4ada-91eb-4857adafe580' },
          { id: '0726b744-2000-40d5-9eae-5fef010492b1' },
          { id: '5037eb07-8410-403b-9b68-ed9c8203640e' },
        ],
      },
      variants: {
        create: [
          {
            color: { connect: { id: '7c3d5843-f63d-4586-9919-6c5b2bfaf65d' } },
            capacity: {
              connect: { id: '1590199d-501c-41e7-8e5c-51d5ba931648' },
            },
            price: 1164,
          },
          {
            color: { connect: { id: '7c3d5843-f63d-4586-9919-6c5b2bfaf65d' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1236,
          },
          {
            color: { connect: { id: '7c3d5843-f63d-4586-9919-6c5b2bfaf65d' } },
            capacity: {
              connect: { id: 'ad173392-ee4e-46d1-8427-a374c108be02' },
            },
            price: 1380,
          },
          {
            color: { connect: { id: '662f75c1-8e4a-42ea-8c45-299dc474e15c' } },
            capacity: {
              connect: { id: '1590199d-501c-41e7-8e5c-51d5ba931648' },
            },
            price: 1164,
          },
          {
            color: { connect: { id: '662f75c1-8e4a-42ea-8c45-299dc474e15c' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1236,
          },
          {
            color: { connect: { id: '662f75c1-8e4a-42ea-8c45-299dc474e15c' } },
            capacity: {
              connect: { id: 'ad173392-ee4e-46d1-8427-a374c108be02' },
            },
            price: 1380,
          },
          {
            color: { connect: { id: 'da969b6e-bc53-4861-b972-c36a8ce91b71' } },
            capacity: {
              connect: { id: '1590199d-501c-41e7-8e5c-51d5ba931648' },
            },
            price: 1164,
          },
          {
            color: { connect: { id: 'da969b6e-bc53-4861-b972-c36a8ce91b71' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1236,
          },
          {
            color: { connect: { id: 'da969b6e-bc53-4861-b972-c36a8ce91b71' } },
            capacity: {
              connect: { id: 'ad173392-ee4e-46d1-8427-a374c108be02' },
            },
            price: 1380,
          },
          {
            color: { connect: { id: '2948e7a5-c8c9-4e31-bccc-034a7e78654a' } },
            capacity: {
              connect: { id: '1590199d-501c-41e7-8e5c-51d5ba931648' },
            },
            price: 1164,
          },
          {
            color: { connect: { id: '2948e7a5-c8c9-4e31-bccc-034a7e78654a' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1236,
          },
          {
            color: { connect: { id: '2948e7a5-c8c9-4e31-bccc-034a7e78654a' } },
            capacity: {
              connect: { id: 'ad173392-ee4e-46d1-8427-a374c108be02' },
            },
            price: 1380,
          },
        ],
      },
    },
  });

  const galaxyS21 = await prisma.product.create({
    data: {
      slug: 'samsung-galaxy-s21',
      name: 'Samsung Galaxy S21',
      thumbnail:
        'https://portfolioapps31.blob.core.windows.net/react-store-products/galaxy-s21.png',
      shortDescription:
        "Spontaneity, now captured from multiple angles. A camera so good, everyone's a pro. All-day battery, and then some. Trust us, you'll look amazing in 8K video.",
      description:
        "Create share-ready GIFs and videos in one take1 or pick your favourite moments and pull your favorite stills in super high res to share with your followers. Zoom in close, take photos and videos like a pro, and capture incredible share-ready moments with our easy-to-use, multi-lens camera. Power every scroll, click, tap, and stream all day long and then some with an intelligent battery that works with you, not against you. A night out. Your best friend's birthday party. Family moments you'll want to remember forever. Capture your life's best moments in head-turning, super smooth 8K video.",
      screenSize: 7,
      talkTime: 18,
      standByTime: 32,
      brand: {
        connect: { id: 'cba10271-598e-45f4-9774-306e660520a3' },
      },
      os: {
        connect: { id: 'a06c0de6-3c8b-4675-84be-1e6b6300b3de' },
      },
      images: {
        create: [
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxys21/samsung-s21.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxys21/samsung-s21_1.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxys21/samsung-s21_2.png',
          },
          {
            url: 'https://portfolioapps31.blob.core.windows.net/react-store-galaxys21/samsung-s21_3.png',
          },
        ],
      },
      features: {
        connect: [
          { id: 'f4430251-60dc-4ada-91eb-4857adafe580' },
          { id: '0726b744-2000-40d5-9eae-5fef010492b1' },
          { id: '5037eb07-8410-403b-9b68-ed9c8203640e' },
          { id: '522ffa8f-71e0-4395-9220-dbbcc61c0a6a' },
          { id: 'afcbfe47-66c9-40a4-abb2-472e083b983c' },
        ],
      },
      variants: {
        create: [
          {
            color: { connect: { id: '2948e7a5-c8c9-4e31-bccc-034a7e78654a' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1400,
          },
          {
            color: { connect: { id: '46cfd902-95fb-412b-b844-6974b47fe019' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1400,
          },
          {
            color: { connect: { id: '6c0eb821-dc4d-4c00-87f3-267968387c47' } },
            capacity: {
              connect: { id: '0ffa1408-3be3-4aaf-b0ed-3ebf09966751' },
            },
            price: 1400,
          },
        ],
      },
    },
  });

  console.log({
    iphone12Mini,
    galaxyNote,
    pixel5,
    galaxyS21U,
    iphone12ProMax,
    iphone12,
    galaxyS21,
  });
}

products()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
