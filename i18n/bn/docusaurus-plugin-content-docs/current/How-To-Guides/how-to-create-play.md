---
sidebar_position: 1
---

# কিভাবে একটি play তৈরি করবেন

স্বাগতম, ডেভেলপাররা! আমরা এটা জেনে খুবই উৎসাহিত যে আপনি একটি নতুন play তৈরি করতে যাচ্ছেন। এটা শুরু করা খুবই সহজ।

> **দ্রষ্টব্য:** নীচের ধাপগুলি বিবেচনা করে যে, আপনি আগেই [react-play](https://github.com/reactplay/react-play) রিপোজিটরিটি ফর্ক করে ক্লোন করেছেন এবং `npm install` অথবা `yarn install` কমান্ড ব্যবহার করে ডিপেন্ডেন্সিগুলি ইনস্টল করেছেন। ফর্কিং সম্পর্কে আপনি যদি নতুন হন, তবে শুরু করার জন্য এই [YouTube গাইড](https://www.youtube.com/watch?v=h8suY-Osn8Q) দেখুন।

- অ্যাপ্লিকেশনটি রান করার জন্য নিম্নলিখিত কমান্ড ব্যবহার করুন

  ```bash
  yarn start

  or

  npm run start
  ```

  যদি আপনি ডিপেন্ডেন্সি সম্পর্কিত কোনো সমস্যার সম্মুখীন হন, তবে নিম্নোক্ত কমান্ডটি ব্যবহার করতে পারেন:

  ```bash
  npm install --legacy-peer-deps
  ```

  বিস্তারিত জানতে [README](https://github.com/reactplay/react-play#readme) ফাইলটি চেক করতে পারেন।

- আপনি অ্যাপ্লিকেশনটি http://localhost:3000 এ অ্যাক্সেস করতে পারবেন।
- `Create` বাটনে ক্লিক করুন।

<p align="center">
  <img src="https://res.cloudinary.com/atapas/image/upload/v1675171492/ReactPlay/Screenshot_2023-01-31_at_6.43.49_PM_bkcvkv.png" alt="create-play" />
</p>

- অ্যাপ্লিকেশনটি আপনাকে অনুমোদন করতে চেষ্টা করবে
- আপনি যদি ইতিমধ্যে [`NHost`](https://nhost.io) এ লগ ইন না থাকেন, তবে আপনাকে অনুমতি দিতে বলা হবে
  - আপনার গিটহাব অ্যাকাউন্ট দিয়ে লগ ইন করুন
- তথ্য পূরণ করুন এবং জমা দিন।

<p align="center">
  <img src="https://res.cloudinary.com/atapas/image/upload/v1675171492/ReactPlay/Screenshot_2023-01-31_at_6.51.24_PM_ljc1hz.png" alt="create-play-fill-form"/>
</p>

প্যারামিটার

| ফিল্ড           | বাধ্যতামূলক? | বিবরণ                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name            | হ্যাঁ        | প্রতিটি `Play` এর একটি নাম থাকা উচিত যা `Play` এর ধারণার সাথে সম্পর্কিত।                                                                                                                                                                                                                                                                                                                                                       |
| Description     | হ্যাঁ        | এখানে `Play`-এর বর্ণনা দেওয়া হয় যাতে ব্যবহারকারীরা এটি আরো ভালোভাবে বুঝতে পারে। সর্বাধিক অনুমোদিত অক্ষরের সংখ্যা ১০২৪ টি।                                                                                                                                                                                                                                                                                                     |
| Issue           | হ্যাঁ        | `Play`-টির সাথে একটি ইস্যু ম্যাপ করতে হবে। এখানে তা নির্বাচন করুন।                                                                                                                                                                                                                                                                                                                                                             |
| Language        | হ্যাঁ        | অ্যাপ্লিকেশনটিকে আপনার পছন্দের ভাষা জানান। এটিতে **JavaScript** এবং **TypeScript** উভয় সাপোর্ট করে। আপনি যেকোনটি সিলেক্ট করতে পারেন।                                                                                                                                                                                                                                                                                           |
| Style           | না           | অ্যাপ্লিকেশনটিকে আপনার পছন্দের স্টাইল জানান। এটিতে **CSS** এবং **SCSS** উভয় সাপোর্ট করে। আপনি যেকোনটি সিলেক্ট করতে পারেন।                                                                                                                                                                                                                                                                                                      |
| Level           | না           | আপনাকে এখানে তিনটি লেভেল থেকে একটি নির্বাচন করতে হবে, "Beginner", "Intermediate", অথবা "Advanced". অনুগ্রহ করে `Play` এর জন্য একটি লেভেল নির্বাচন করুন। এই লেভেলের মাধ্যমে React ব্যবহার করে একট `Play` ডেভেলপ করার সম্ভাব্য জটিলতা প্রকাশ করা হয়।                                                                                                                                                                             |
| Github Username | হ্যাঁ        | `Play` তৈরি করতে আপনার গিটহাব username দিন যাতে আপনাকে `Play`-এর ক্রিয়েটর হিসাবে চিহ্নিত করা যায়।                                                                                                                                                                                                                                                                                                                             |
| Tags            | না           | অনুগ্রহ করে কমা দ্বারা পৃথক করা ট্যাগের তালিকা প্রদান করুন। উদাহরণঃ JSX, Hooks                                                                                                                                                                                                                                                                                                                                                 |
| Cover Image URL | না           | `play list` পেইজে `Play` টি থাম্বনেলসহ প্রদর্শন করার জন্য কভার ইমেজ ব্যবহার করা হয়। অনুগ্রহ করে কভার ইমেজের জন্য একটি লিংক প্রদান করুন, যা পাবলিকভাবে অ্যাক্সেস যোগ্য একটি URL, উদাহরণঃ https://res.cloudinary.com/reactplay/image/upload/v1649060528/demos/id-card_pdvyvz.png। এছাড়া, আপনি play ফোল্ডারের রুটে cover.png ফাইল রাখতে পারেন। যদি আপনার কাছে কভার ইমেজ না থাকে, তবে অ্যাপ্লিকেশন ডিফল্ট কভার ইমেজ ব্যবহার করবে। |
| Blog URL        | না           | আপনি যদি এই `Play` সম্পর্কে ব্লগ লিখে থাকেন, তাহলে অনুগ্রহ করে আপনার ব্লগ আর্টিকেল পেইজের লিঙ্ক প্রদান করুন।                                                                                                                                                                                                                                                                                                                   |
| Video           | না           | আপনি যদি এই `Play`-টি সম্পর্কে ভিডিও টিউটোরিয়াল তৈরি করে থাকেন, তাহলে অনুগ্রহ করে আপনার Youtube ভিডিওটির লিঙ্ক প্রদান করুন।                                                                                                                                                                                                                                                                                                   |
|                 |

- সফলভাবে জমা দেওয়ার পরে, আপনাকে একটি পেইজে নিয়ে যাওয়া হবে যেখানে একটি play_id প্রদান করা হবে।

<p align="center">
  <img src="https://res.cloudinary.com/atapas/image/upload/v1675172353/ReactPlay/Screenshot_2023-01-31_at_7.02.55_PM_k1tphu.png" alt="command" />
</p>

- আপনার অ্যাপ্লিকেশনটি বন্ধ করুন
- Reactplay-এর রুটে নেভিগেট করুন
- নিম্নলিখিত কমান্ড চালান

  ```bash
  npx create-react-play -c <the_play_id>
  ```

  **দ্রষ্টব্য:** উপরের কমান্ডটি চালানোর পর, যদি play ফোল্ডার <reactplay_directory>/src/plays/<your_play_name> এখনও খালি থাকে, তবে আপনি সম্ভবত পুরানো ভার্সনের প্যাকেজ ব্যবহার করছেন। এই ক্ষেত্রে `@latest` ব্যবহার করুন।

  ```bash
  npx create-react-play@latest -c <the_play_id>
  ```

 <p align="center">
      <img src="https://res.cloudinary.com/atapas/image/upload/v1675172352/ReactPlay/Screenshot_2023-01-31_at_7.06.07_PM_jhbcbl.png" alt="copy-command" />
 </p>

- অ্যাপ্লিকেশনটি চালু করুন

  ```bash
  yarn start

  or

  npm run start
  ```

- এখন আপনি দেখতে পাবেন যে আপনার `Play`-টি [play list](http://localhost:3000/plays) পেইজে যুক্ত হয়েছে।
<p align="center">
  <img src="https://res.cloudinary.com/atapas/image/upload/v1675172352/ReactPlay/Screenshot_2023-01-31_at_7.06.55_PM_gyck2r.png" alt="play" />
</p>

- `Play` থাম্বনেল এ ক্লিক করে আপনি `Play`-এর বিস্তারিত দেখতে পারবেন।
<p align="center">
  <img src="https://res.cloudinary.com/atapas/image/upload/v1675172353/ReactPlay/Screenshot_2023-01-31_at_7.07.19_PM_dnmcuu.png" alt="play-details"/>
</p>

- আপনি দেখতে পাবেন যে আপনার `Play`-এর জন্য একটি ডিরেক্টরি তৈরি করা হয়েছে `./src/plays/<your_play_name>` পাথে।
<p align="center">
  <img src="https://res.cloudinary.com/atapas/image/upload/v1675172514/ReactPlay/Screenshot_2023-01-31_at_7.10.36_PM_uxjomi.png" alt="code"/>
</p>

- আপনার `Play`-টি ডেভেলপ করতে থাকুন। হ্যাপি কোডিং!

## 👀 রিভিউর জন্য একটি play জমা দেওয়া

আপনি যখন আপনার `Play`-এর কোডিং সম্পন্ন করবেন, তখন রিভিউর জন্য এটি জমা দিতে পারবেন। রিভিউর জন্য `Play` জমা দেওয়া প্রক্রিয়া দুটি ধাপে সম্পন্ন করতে হয়।

- আপনার পরিবর্তনগুলি নিয়ে [react-play](https://github.com/reactplay/react-play) রিপোজিটরিতে একটি Pull Request তৈরি করুন।
- রিভিউর মন্তব্যগুলির কার্যক্রম পরিচালনা করার জন্য সাপ্তাহিক ভিত্তিতে কিছু সময় প্রদান করুন।

Pull Request গৃহীত এবং merged হলে, আমরা আপনাকে জানাবো এবং [react-play](https://github.com/reactplay/react-play) প্রজেক্টে আপনাকে একজন `Contributor` হিসাবে যুক্ত করবো।

## ✋ সাহায্য প্রয়োজন??

আপনি আমাদের সাথে [ReactPlay Twitter Handle | @ReactPlayIO](https://twitter.com/ReactPlayIO).-তে
সরাসরি মেসেজ দিয়ে যোগাযোগ করতে পারেন। এছাড়াও, আলোচনার জন্য আমাদের [Discord community](https://discord.gg/vrTxWUP8Am) কমিউনিটিতে যোগদান করতে আপনাকে স্বাগতম।
