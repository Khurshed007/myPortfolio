const sunMoon = document.getElementById("moon_sun");
const navLink = document.querySelectorAll(".nav-link");
const tabs = document.querySelectorAll(".right_side_content .tab");
const switcher = document.querySelector(".switcher_content");
const setting = document.getElementById("setting");
const select = document.querySelector(".change-lang");
const allLang = ["ru", "en", "de", "taj"];
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const aboutBox = document.querySelectorAll(".about_box");
const circleItem = document.querySelector(".circle_item");
const menuItems = document.querySelectorAll("nav a");
const nav = document.querySelector("nav");
const hamburger = document.getElementById("menu-icon")
const name = document.getElementById("name")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const message = document.getElementById("message")
const f = document.getElementById("form")
let circle;

function sendEmail() {
  const bodyMessage = `Full Name: ${name.value}   Email: ${email.value} Phone Number: ${phone.value} `
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "khurshedahmadjonov@gmail.com",
    Password : "3CEE9C34901EC616979494A0FF0982369F1C",
    To : 'khurshedahmadjonov@gmail.com',
    From : "khurshedahmadjonov@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => message
);
}


f.addEventListener("submit", (e) => {
   e.preventDefault();
   sendEmail()
  //  alert("asdasd")
})
console.log(form,"form")



menuItems.forEach((items) => items.addEventListener("click", (e) => {
        menuItems.forEach((items)=> items.classList.remove("active"))
        e.currentTarget.classList.add("active")
}))

hamburger.addEventListener("click", () => {
     nav.classList.toggle("active")
})

function handleClick() {
  let indexCounter = 0;
  // let span = document.createElement("span");
  // let circle = span.classList.add("circle")
  Array.from(aboutBox).forEach(
    (_,index) => (circleItem.innerHTML += `<span class="circle animate" style="--i:${index}"></span>`)
  );
  circle = document.querySelectorAll(".circle");
  circle[0].classList.add("active");

  Array.from(circle).forEach((items, index) => {
    items.addEventListener("click", () => {
      // console.log(indexCounter)
      Array.from(circle).forEach((items) => items.classList.remove("active"));
      Array.from(aboutBox).forEach((items) => items.classList.remove("active"));
      circle[index].classList.add("active");
      indexCounter = index;
      aboutBox[indexCounter].classList.add("active");
      console.log(indexCounter, "index");
    });
  });

  return function (event) {
    //  console.log(aboutBox[indexCounter], "box")
    if (event.target.classList.contains("prev")) {
      Array.from(aboutBox).forEach((items) => items.classList.remove("active"));
      Array.from(circle).forEach((items) => items.classList.remove("active"));
      indexCounter--;
      if (indexCounter < 0) {
        console.log(indexCounter, "counterUnten");
        indexCounter = aboutBox.length - 1;

        // Array.from(aboutBox).forEach((items)=> items.classList.remove("active"))
        // aboutBox[indexCounter].classList.add("active")
      }
      aboutBox[indexCounter].classList.add("active");
      circle[indexCounter].classList.add("active");
    } else if (event.currentTarget.classList.contains("next")) {
      Array.from(aboutBox).forEach((items) => items.classList.remove("active"));
      Array.from(circle).forEach((items) => items.classList.remove("active"));
      indexCounter++;
      if (indexCounter > aboutBox.length - 1) {
        indexCounter = 0;
      }
      aboutBox[indexCounter].classList.add("active");
      circle[indexCounter].classList.add("active");
    }
  };
}

const checkCarousel = handleClick();

prevBtn.addEventListener("click", checkCarousel);
nextBtn.addEventListener("click", checkCarousel);

console.log(select.value);
const langArr = {
  home: {
    ru: "Главное",
    en: "Home",
    de: "Hause",
    taj: "Асос",
  },

  projects: {
    ru: "Проекты",
    en: "Projects",
    de: "Projekten",
    taj: "Проектҳо",
  },
  "my-skills": {
    ru: "Навыки",
    en: "Skills",
    de: "Fähigkeiten",
    taj: "Маҳоратҳои",
  },
  education: {
    ru: "Образование/Работа",
    en: "Education/Job",
    de: "Bildungen/Beruf",
    taj: "Таълимҳои/Корҳои",
  },
  skills: {
    ru: "Навыки",
    en: "Skills",
    de: "Fähigkeiten",
    taj: "Маҳоратҳо",
  },
  story: {
    ru: "Моя история",
    en: "My Story",
    de: "Meine Geschichte",
    taj: "Ҳикояи ман",
  },
  "story-one": {
    de: `Mein Name ist Khurshed Akhmadjonov, ich bin 23 Jahre alt. Vor mehr als zwei Jahren, während der Quarantäne wegen
      COVID-19 im Jahr 2020 begann ich, Programmieren zu lernen. Während viele angekettet waren
      Zuhause beschloss ich, die Zeit zu nutzen, um eine neue Fähigkeit zu erlernen, und entdeckte die Welt
      Programmierung im Internet. Unter der Anleitung eines Verwandten begann ich schnell mit HTML und CSS
      stürzte sich ins Studium. Obwohl ich nach der Quarantäne das Programmieren vorübergehend beiseite gelegt habe, aber im Jahr 2021, Als ich die wachsende Bedeutung dieser Fähigkeit erkannte, beschloss ich, zurückzukommen und sie ernst zu nehmen. In zwei Monaten habe ich
      vertiefte mein Wissen durch das Erlernen von Sass, SCSS und den Grundlagen der Positionierung mit Grid und
      Flexbox.`,
    ru: `Меня зовут Хуршед Ахмаджонов, мне 23 года. Более двух лет назад, во время карантина из-за
      COVID-19 в 2020 году, я начал изучать программирование. В то время как многие были прикованы к
      домам, я решил использовать время для изучения нового навыка и открыл для себя мир
      программирования в интернете. Начав с HTML и CSS под руководством родственника, я быстро
      погрузился в изучение. Хотя после карантина я временно отложил программирование, но в 2021 году,
      видя растущую важность этого навыка, я решил вернуться и серьезно заняться им. За два месяца я
      углубил свои знания, изучив Sass, SCSS, а также основы позиционирования с использованием Grid и
      Flexbox`,
    en: `My name is Khurshed Akhmadjonov, I am 23 years old. More than two years ago, during quarantine
      COVID-19 in 2020, I started learning programming. While many were chained
      At home I decided to use the time to learn a new skill and explore the world
      Programming on the Internet. Under the guidance of a relative, I quickly started learning HTML and CSS
      threw himself into studying. Although I temporarily put programming aside after quarantine, but in 2021, realizing the growing importance of this skill, I decided to come back and take it seriously. In two months I have
      Deepened my knowledge by learning Sass, SCSS and the basics of positioning with Grid and
      Flexbox.`,
    taj: `Номи ман Хуршед Ахмадчонов, 23-солаам. Зиёда аз ду сол пеш, дар давраи карантин
      COVID-19 дар соли 2020, ман ба омӯзиши барномасозӣ шурӯъ кардам. Дар ҳоле ки бисёриҳо занҷирбанд шуданд
      Дар хона ман қарор додам, ки вақтро барои омӯхтани малакаи нав ва омӯхтани ҷаҳон истифода кунам
      Барномасозӣ дар Интернет. Бо роҳбарии як хешам ман зуд омӯхтани HTML ва CSS-ро оғоз кардам
      худро ба хондан мепартофт. Гарчанде ки ман барномасозиро пас аз карантин муваққатан як сӯ гузоштам, аммо дар соли 2021 аҳамияти афзояндаи ин маҳоратро дарк намуда, тасмим гирифтам, ки баргардам ва онро ҷиддӣ қабул кунам. Дар ду моҳ ман дорам
      Дониши худро тавассути омӯзиши Sass, SCSS ва асосҳои ҷойгиркунӣ бо Grid ва Flexbox амиқтар кардам
      .`,
  },
  "story-two": {
    de: `Außerdem war ich Student und mein Hauptinteresse galt dem Studium.
    Allerdings hatte ich auch vor, als Freiwilliger im Sozialen Dienst (FSJ) nach Deutschland zu reisen.
    Durch die Einreichung der Unterlagen und das bestandene Vorstellungsgespräch in der Botschaft hatte ich die Möglichkeit, meine Pläne umzusetzen.
    Nach meinem Umzug nach Deutschland stand ich vor der Notwendigkeit, Deutsch zu lernen, um die B2-Zertifikatsprüfung zu bestehen.
    Dies dauerte 8 Monate und stellte die Programmierung vorübergehend in den Hintergrund.
    Ein verspäteter Versuch, sich für eine Ausbildung im Bereich IT-Entwicklung zu bewerben, führte zu einer Ablehnung. Stattdessen entschied er sich dazu
    sich für eine medizinische Ausbildung zu bewerben und ein Stipendium für Soziale Arbeit (FSJ) zu absolvieren.`,
    ru: `Помимо этого, я был студентом университета, и моя основная концентрация была на учебе. Тем не
    менее, я также планировал переезд в Германию в качестве добровольца по социальной службе (FSJ).
    Пройдя через процесс подачи документов и прохождения собеседования в посольстве, я нашел
    возможность осуществить свои планы.
    После переезда в Германию я столкнулся с необходимостью изучения немецкого языка, чтобы сдать
    экзамен на сертификат B2. Это заняло 8 месяцев и временно отодвинуло программирование на второй
    план. Попытка подать документы на обучение в области IT-разработки оказалась поздней, что
    привело к отказам. Вместо этого, решил обратиться к обучению в области медицины, получив
    стажировку по социальной службе (FSJ).`,
    en: `Besides, I was a university student and my main interest was in studies.
    However, I also planned to travel to Germany as a Social Service Volunteer (FSJ).
    By submitting the documents and passing the interview at the embassy, ​​I had the opportunity to implement my plans.
    After moving to Germany, I was faced with the need to learn German in order to pass the B2 certificate exam.
    This took 8 months and temporarily put programming on the back burner.
    An attempt to apply for a training in IT development was made late, which resulted in rejection. Instead, he decided to
    to apply for medical training and complete a fellowship in social work (FSJ).`,
    taj: `Ба ҷуз ин, ман донишҷӯи донишгоҳ будам ва таваҷҷӯҳи асосиам ба таҳсил буд. 
    Бо вуҷуди ин, ман инчунин ният доштам, ки ба Олмон ҳамчун волонтёри хидмати иҷтимоӣ (FSJ) сафар кунам. 
    Тавассути супоридани ҳуҷҷатҳо ва гузаштани мусоҳиба дар сафорат ман имкон пайдо кардам, ки нақшаҳои худро амалӣ созам. 
    Пас аз кӯчидан ба Олмон, ман бо зарурати омӯхтани забони олмонӣ барои супоридани имтиҳони шаҳодатномаи B2 дучор шудам. 
    Ин 8 моҳро дар бар гирифт ва муваққатан барномасозиро дар ҷои қафо гузошт. 
    Кӯшиши довталабӣ барои омӯзиш дар соҳаи рушди IT дер анҷом ёфт, ки боиси радшавӣ гардид. Ба ҷои ин, ӯ тасмим гирифт, 
    ки ба омӯзиш дар соҳаи тиб муроҷиат кунад ва стипендияро дар кори иҷтимоӣ (FSJ) хатм кунад.
      .`,
  },
  "story-three": {
    de: `Dann habe ich parallel dazu angefangen, Programmieren zu lernen
    Studium, Erlernen von JavaScript im Dezember 2022 und Wechsel zu React bis September 2023. Als nächstes I
    beherrscht Redux Toolkit und Webpack.
    Später nahm ich am Ausbildungsprogramm von Telran teil, das eine spätere Anstellung versprach
    Fertigstellung. Dort vertiefte ich mein Wissen mit Hilfe qualifizierter Lehrer und setze es fort
    Bewegen Sie sich auf Ihr Ziel zu. Derzeit habe ich Erfahrung mit HTML, CSS, Sass, SCSS, JavaScript,
    React, Redux Toolkit und Webpack, und ich werde hier nicht aufhören.`,
    ru: `Затем я начал обучение программированию параллельно с
    учебой, изучая JavaScript в декабре 2022 года и переходя на React к сентябрю 2023 года. Далее я
    освоил Redux Toolkit и webpack.
    Позднее, я присоединился к программе обучения Telran, которая обещала трудоустройство после
    завершения. Там я углубил свои знания с помощью квалифицированных преподавателей и продолжаю
    двигаться к своей цели. На данный момент я имею опыт работы с HTML, CSS, Sass, SCSS, JavaScript,
    React, Redux Toolkit и Webpack, и я не собираюсь останавливаться на достигнутом.`,
    en: `Then I started learning programming in parallel with
    studies, learning JavaScript in December 2022 and switching to React by September 2023. Next I
    mastered Redux Toolkit and webpack.
    Later, I joined Telran's training program, which promised employment after
    completion. There I deepened my knowledge with the help of qualified teachers and continue
    move towards your goal. Currently I have experience with HTML, CSS, Sass, SCSS, JavaScript,
    React, Redux Toolkit and Webpack, and I'm not going to stop there.`,
    taj: `Пас аз он ман ба омӯзиши барномасозӣ дар баробари он шурӯъ кардам
    таҳсил, омӯзиши JavaScript дар моҳи декабри соли 2022 ва гузаштан ба React то сентябри 2023. Оянда И
    Toolkit Redux ва webpack азхуд карда шудааст.
    Баъдтар, ман ба барномаи таълимии Телран ҳамроҳ шудам, ки пас аз он ба кор ваъда дода буд
    тамом кардан. Дар он ҷо бо ёрии омӯзгорони соҳибихтисос донишамро амиқтар кардам ва идома медиҳам
    ба сӯи ҳадафи худ ҳаракат кунед. Дар айни замон ман бо HTML, CSS, Sass, SCSS, JavaScript таҷриба дорам,
    React, Redux Toolkit ва Webpack, ва ман дар он ҷо бас карданӣ нестам.
      `,
  },

  expertise: {
    ru: "Мои навыки",
    en: "My expertises",
    de: "Meine Fähigkeiten",
    taj: "Маҳоратҳои ман",
  },
  plan: {
    ru: "Планирую учить",
    en: "Plan to learn",
    de: "Lernenplan",
    taj: "Нақшаи омухтан",
  },
  my: {
    ru: "Мои",
    en: "My",
    de: "Meine",
    taj: "Ман",
  },
  about: {
    ru: "О себе",
    en: "About me",
    de: "Über mich",
    taj: "Аз бораи худ",
  },
  contacts: {
    ru: "Контакты",
    en: "Contacts",
    de: "Kontakten",
    taj: "Контактҳо",
  },
  "my-contacts": {
    ru: "Контакты",
    en: "Contacts",
    de: "Kontakten",
    taj: "Контактҳои",
  },
  name: {
    ru: "Хуршед",
    en: "Khurshed",
    de: "Chursched",
    taj: "Хуршед",
  },

  unit: {
    ru: "Мое портфолио",
    en: "My Portfolio",
    de: "Mein Portfolio",
    taj: "Портфолиёи ман",
  },
  chip: {
    ru: "chip заебал",
    en: "Hi chip",
    de: "cho kak ti chip",
    taj: "Ман",
  },
  typed: {
    ru: ["Frontend- и", "Web-разработчик"],
    en: ["Frontend- and", "Web-Developer"],
    de: ["Frontend- und", "Web-Entwickler"],
    taj: ["Frontend ва", "Web таҳиягар мебошам"],
  },
  text: {
    ru: "Меня зовут",
    en: "My name is",
    de: "Ich heiße",
    taj: "Номам",
  },
  i: {
    ru: "Я",
    en: "I am a",
    de: "Ich bin",
    taj: "Ман",
  },
  "contact-me": {
    ru: "Контактироваться",
    en: "Contact me",
    de: "Kontaktieren",
    taj: "Тамос шудан",
  },
  "about-me": {
    ru: `Я обладаю двухлетним опытом работы в области веб-разработки. 
        В течение года самостоятельно изучал различные аспекты этой области, 
        а затем углубил свои знания, проходя Bootcamp в Telran уже год, 
        который специализируется на подготовке будущих разработчиков. Сейчас я стремлюсь применить свои навыки и опыт в сфере 
        frontend разработки, и поэтому выбрал вашу компанию. 
        Готов принять вызов и внести свой вклад в ваших проектах.`,
    de: `Seit über 2 Jahren arbeite ich bereits als Webentwickler. 
    Ein Jahr lang habe ich mich selbstständig in verschiedenen Bereichen des Feldes weitergebildet, 
    bevor ich ein einjährige Erfahrung in Bootcamp bei Telran gesammelt habe, das darauf spezialisiert ist, 
    zukünftige Entwickler auszubilden. Nun möchte ich mich gerne als Frontend-Entwickler versuchen, 
    daher habe ich mich für Ihr Unternehmen entschieden. Ich bin bereit, die Herausforderung anzunehmen und zu Ihren Projekten beizutragen`,
    en: `I have two years of experience in web development.
    For a year I independently studied various aspects of this area,
    and then deepened my knowledge by going through Bootcamp at Telran for a year now,
    which specializes in training future developers. Now I am looking to apply my skills and experience in the field
    frontend development, and that's why I chose your company.
    Ready to take on the challenge and contribute to your projects.`,
    taj: `Ман ду сол таҷрибаи таҳияи веб дорам.
    Дар давоми як сол ман мустақилона паҳлӯҳои гуногуни ин соҳаро омӯхтам,
    ва он гоҳ донишамро тавассути гузаштан аз Bootcamp дар Телран тӯли як сол амиқтар кардам,
    ки ба тайёр кардани тахиякунандагони оянда махсус аст. Ҳоло ман кӯшиш мекунам, ки малака ва таҷрибаи худро дар ин соҳаи
    frontend татбик кунам ва барои ҳамин ман ширкати шуморо интихоб кардам. Омодаам, ки мушкилотро қабул кунам ва дар проектҳои 
    шумо саҳми худро гузорам.`,
  },
  "ing-my-story": {
    ru: "История",
    en: "Story",
    de: "Geschichte",
    taj: "Ҳикояти",
  },
  school: {
    ru: `Общая средняя школа №95, город Душанбе,
    Таджикистан`,
    en: `
    General secondary school №95, Dushanbe city,
                                Tajikistan`,
    de: `Die Allgemeinbildende Mittelschule №95, Stadt Duschanbe,
    Tadschikistan`,
    taj: `
    Мактаби миёнаи умумии №95, ш.Душанбе,
                                Точикистон`,
  },
  "about-school": {
    ru: `Школа №95 в Душанбе, Таджикистан, представляет собой место, где происходило множество ярких событий и важных моментов в моей жизни.
     От учебного процесса до школьных мероприятий, от дружбы до личных достижений - каждый аспект этой школы, вероятно, оставил свой след в моей памяти. 
     Эти воспоминания, будь то уроки, друзья или школьные мероприятия, 
    формировали мою личность и определяли мой путь`,
    en: `
    School No. 95 in Dushanbe, Tajikistan is a place where many significant events and important moments in my life took place. 
    From the academic process to school events, from friendships to personal achievements, every aspect of this school has probably left its mark on my memory. 
    These memories, whether from lessons, friends or school events, shaped my personality and determined my path`,
    de: `Die Schule Nr. 95 in Duschanbe, Tadschikistan, 
    ist ein Ort, an dem viele aufregende Ereignisse und wichtige Momente in meinem Leben stattfanden. 
    Vom akademischen Prozess bis zu schulischen Ereignissen, von Freundschaften bis hin zu persönlichen Erfolgen hat wahrscheinlich 
    jeder Aspekt dieser Schule seine Spuren in meiner Erinnerung hinterlassen. Diese Erinnerungen, ob aus dem Unterricht, Freunden oder Schulveranstaltungen,
     prägten meine Persönlichkeit und bestimmten meinen Weg`,
    taj: `
    Мактаби рақами 95-и шаҳри Душанбе, Тоҷикистон маконест, ки дар он воқеаҳои муҳим ва лаҳзаҳои муҳими ҳаёти ман рух додаанд. 
    Аз раванди таълим то чорабиниҳои мактабӣ, аз дӯстӣ то дастовардҳои шахсӣ, шояд ҳар як паҳлӯи ин мактаб дар хотирам осори худро гузошта бошад. 
    Ин хотираҳо, хоҳ аз дарсҳо, хоҳ дӯстон ва хоҳ рӯйдодҳои мактабӣ, шахсияти маро шакл доданд ва роҳи маро муайян карданд`,
  },
  study: {
    ru: `Таджикский национальный университет на экономическом факультете`,
    en: `
    Tajik National University at the Faculty of Economics`,
    de: `Tadschikische Nationale Universität an der Fakultät für Wirtschaft`,
    taj: `Донишгоҳи миллии Тоҷикистон дар факултети иқтисод`,
  },
  "about-study": {
    ru: `
    В Таджикском национальном университете на экономическом факультете я получил обширные знания и навыки в области экономики, бизнеса и финансов.
     моя учебная программа обеспечила тебя фундаментальными знаниями, необходимыми для моего профессионального роста и 
    карьерного развития в соответствующей области.`,
    en: `
    At the Tajik National University, Faculty of Economics, I gained extensive knowledge and skills in the field of economics, 
    business and finance. my curriculum has provided you with the 
    fundamental knowledge necessary for my professional growth and career development in the relevant field.`,
    de: `An der Tadschikischen Nationaluniversität, Fakultät für Wirtschaftswissenschaften, 
    habe ich umfangreiche Kenntnisse und Fähigkeiten im Bereich Wirtschaft, Business und Finanzen erworben. Mein Lehrplan hat Ihnen das grundlegende Wissen vermittelt, 
    das für meine berufliche Entwicklung und Karriereentwicklung in dem relevanten Bereich erforderlich ist.`,
    taj: `
    Дар факултаи иқтисод дар Донишгоҳи миллии Тоҷикистон дар бахшҳои иқтисод, тиҷорат ва молия донишу малакаи густурда пайдо кардам. 
    барномаи таълимии ман ба шумо донишҳои бунёдии заруриро барои рушди касбӣ ва рушди касб дар соҳаи дахлдор пешкаш кардааст.`,
  },
  deutschkurs: {
    ru: `Курс немецкого языка в Dex, Душанбе уровень B2`,
    en: `
    
German course at Dex, Dushanbe level B2`,
    de: `Deutschkurs bei Dex, Duschanbe Niveau B2`,
    taj: `Курси олмонӣ дар Dex, Душанбе сатҳи B2`,
  },
  "about-deutschkurs": {
    ru: `На курсах немецкого языка в центре обучения Dex в Душанбе я прошел путь от начального уровня до уровня B2. Начиная 
    с основных фраз и грамматики на уровне A1 и A2, я постепенно углублял свои знания, изучая более сложные конструкции и расширяя свой словарный запас. 
    На уровне B2 я достиг уверенного владения языком, способного вести сложные разговоры, понимать разнообразные тексты и выражать свои мысли на немецком.
     Благодаря этому курсу я смог достичь хороших знаний в немецком языке и успешно сдал экзамен Telc B2. 
    Теперь я готов к применению своих навыков в реальных ситуациях общения на немецком языке и продолжению своего образования или карьеры в немецкоязычной среде`,
    en: `In the German language courses at the Dex training center in Dushanbe, I went from beginner level to B2 level. Starting with basic phrases and grammar 
    at A1 and A2 level, I gradually increased my knowledge by learning more complex structures and expanding my vocabulary. At level B2 I achieved a confident 
    command of the language, able to have complex conversations, understand a variety of texts and express my thoughts in German. 
    Thanks to this course I was able to achieve good knowledge of the German language and successfully passed the Telc B2 exam. 
    I am now ready to apply my skills in real-life German communication situations and continue my education or career in a German-speaking environment`,
    de: `Im Deutschkurs im Dex-Schulungszentrum in Duschanbe habe ich mich vom Anfängerniveau auf das B2-Niveau gesteigert.
    Ich begann mit grundlegenden Phrasen und Grammatik auf den Niveaus A1 und A2 und erweiterte nach und nach mein Wissen, indem ich komplexere Strukturen lernte und meinen Wortschatz erweiterte. Auf dem Niveau B2 beherrsche ich die Sprache souverän, bin in der Lage, komplexe Gespräche zu führen, vielfältige Texte zu verstehen und meine Gedanken auf Deutsch auszudrücken. Dank dieses Kurses konnte ich gute Kenntnisse der deutschen Sprache erlangen und die Telc B2-Prüfung erfolgreich ablegen. Jetzt bin ich bereit, meine 
    Fähigkeiten in realen deutschen Kommunikationssituationen anzuwenden und meine Ausbildung oder Karriere in einem deutschsprachigen Umfeld fortzusetzen`,
    taj: `Дар курси забони олмонӣ дар маркази таълимии Dex дар Душанбе ман аз сатҳи ибтидоӣ ба сатҳи B2 гузаштам. Аз ибораҳои асосӣ ва грамматика дар сатҳи A1 ва A2 сар карда, ман тадриҷан дониши худро тавассути омӯхтани сохторҳои мураккабтар ва васеъ кардани луғат зиёд кардам. Дар сатҳи B2 ман ба дониши боэътимоди забон ноил шудам, қодир ба гуфтугӯҳои мураккаб, фаҳмидани матнҳои гуногун ва фикрҳои худро бо забони олмонӣ баён кунам. Ба шарофати ин курс ман тавонистам ба дониши хуби забони олмонӣ ноил шавам ва имтиҳони Telc B2-ро бомуваффақият 
    супурдам. Ман ҳоло омодаам, ки малакаҳои худро дар ҳолатҳои муоширати воқеии олмонӣ истифода барам ва таҳсил 
    ё касбамро дар муҳити олмонзабон идома диҳам.`,
  },
  fsj: {
    ru: `Добровольный социальный год (FSJ) в клинике Helios, Rottweil`,
    en: `
    Voluntary social year (FSJ) in Helios Clinic, Rottweil`,
    de: `Freiwilliges Soziales Jahr (FSJ) in Helios Klinik, Rottweil`,
    taj: `Соли иҷтимоии ихтиёрӣ (FSJ) дар Helios Klinik, Rottweil`,
  },
  "about-fsj": {
    ru: `В течение годичного добровольного социального года (FSJ) я старался глубже погрузиться в богатое наследие немецкой культуры, укрепляя значимые связи с 
    отдельными людьми и сообществами, одновременно оттачивая свои лингвистические знания немецкого языка.`,
    en: `During a year-long voluntary social year (FSJ), I endeavored to immerse myself deeper into the rich tapestry of German culture, 
    fostering meaningful connections with individuals and communities while concurrently honing my linguistic proficiency in the German language`,
    de: `
    Während eines einjährigen Freiwilligen Sozialen Jahres (FSJ) bemühte ich mich, tiefer in die reiche Vielfalt der deutschen Kultur einzutauchen,
     sinnvolle Verbindungen mit Einzelpersonen
     und Gemeinschaften zu pflegen und gleichzeitig meine Sprachkenntnisse in der deutschen Sprache zu verbessern`,
    taj: `Дар давоми як соли иҷтимоии ихтиёрӣ (FSJ), ман кӯшиш кардам, ки худро дар фарҳанги олмонӣ 
    амиқтар ғарқ созам, робитаҳои пурмазмунро бо шахсони алоҳида ва ҷомеаҳо инкишоф 
    диҳам ва ҳамзамон маҳорати забонии худро дар забони олмонӣ такмил диҳам.`,
  },
  ausbildung: {
    ru: `Обучение на медбрата в клинике Helios, Titisee-Neustadt`,
    en: `
    Apprenticeship as a Nursing Specialist at Helios Clinic, Titisee-Neustadt`,
    de: `Ausbildung als Pflegefachmann in Helios Klinik, Titisee-Neustadt`,
    taj: `
    Омӯзиш ҳамчун мутахассиси ҳамширагӣ дар Helios Klinik, Titisee-Neustadt`,
  },
  "about-ausbildung": {
    ru: `За время обучения я приобрел глубокие знания о различных заболеваниях и приобрел навыки, необходимые для борьбы с ними.
    с пациентами, включая сострадательное общение и эффективное
    Реагирование в чрезвычайных ситуациях. Образовательные программы, предлагаемые нашим учреждением, соответствуют моим профессиональным интересам.
    репертуара и углубили мое понимание моральных и этических аспектов медицинской практики.
    Вдохновленный своим образованием, будучи студентом, я стремлюсь постоянно расти и развиваться, и не только профессионально.
     навыки, но и приобрести понимание человеческого аспекта в области медицины.`,
    en: `
    Throughout my studies, I have acquired in-depth knowledge of various diseases and mastered the skills required to 
    interact with patients, including empathetic communication and effective response in emergency situations. 
    The educational programs provided by our institution have enriched my professional toolkit and deepened my understanding of the moral and ethical 
    aspects of medical practice. Inspired by my education, I am driven as a student to continually grow and develop, 
    gaining not only professional skills but also an appreciation for the human element in the medical field.`,
    de: `Im Laufe meiner Ausbildung habe ich mir fundierte Kenntnisse über verschiedene Krankheiten angeeignet und mir die Fähigkeiten angeeignet, die für den Umgang 
    mit Patienten erforderlich sind, einschließlich einfühlsamer Kommunikation und effektiver 
    Reaktion in Notfallsituationen. Die von unserer Einrichtung angebotenen Bildungsprogramme haben mein berufliches 
    Repertoire bereichert und mein Verständnis der moralischen und ethischen Aspekte der medizinischen Praxis vertieft. 
    Inspiriert durch meine Ausbildung bin ich als Student bestrebt, kontinuierlich zu wachsen und mich weiterzuentwickeln und dabei nicht nur berufliche
     Fähigkeiten, sondern auch eine Wertschätzung für den menschlichen Aspekt im medizinischen Bereich zu erwerben.`,
    taj: `
    Дар давоми омӯзиш ман дар бораи бемориҳои гуногун дониши амиқ гирифтам ва малакаҳои заруриро барои мубориза бо онҳо пайдо кардам.
    бо беморон талаб карда мешавад, аз ҷумла муоширати дилсӯз ва муассир
    Вокуниш ба ҳолатҳои фавқулодда. Барномаҳои таълимие, ки муассисаи мо пешниҳод мекунад, манфиатҳои касбии маро доранд
    репертуар ва фахмиши худро дар бораи чихатхои ахлокй ва ахлокии амалияи тиббй чукуртар кард.
    Аз таҳсили худ илҳом гирифта, ҳамчун донишҷӯ ман кӯшиш мекунам, ки пайваста рушд ва рушд кунам, на танҳо аз ҷиҳати касбӣ
     малакаҳо, балки инчунин ба даст овардани қадр кардани ҷанбаи инсонӣ дар соҳаи тиб.`,
  },
  mcdonalds: {
    ru: `Minijob в McDonald's, Titisee-Neustadt`,
    en: `
    Minijob in McDonald's, Titisee-Neustadt`,
    de: `Minijob in McDonald's, Titisee-Neustadt`,
    taj: `
    Minijob дар McDonald's, Titisee-Neustadt`,
  },
  "about-mcdonalds": {
    ru: `
    Работая на Minijob в McDonald's, я получаю дополнительный доход, 
    ценный опыт работы, гибкий график, льготы для сотрудников и возможности для карьерного роста.`,
    en: `
    Working on a minijob at McDonald's, I earn additional income,
    Valuable work experience, flexible schedules, employee benefits and opportunities for career growth.`,
    de: `Ein Minijob bei McDonald's verschafft mir ein zusätzliches Einkommen,
    Wertvolle Berufserfahrung, flexible Zeitpläne, Mitarbeitervorteile und Möglichkeiten zur beruflichen Weiterentwicklung.`,
    taj: `
   Аз Minijob дар McDonald's дар кори хурд кор карда, ман даромади иловагӣ мегирам,
    Таҷрибаи гаронбаҳои корӣ, ҷадвалҳои тағйирпазир, манфиатҳои кормандон ва имкониятҳо барои рушди касб.`,
  },
  english: {
    ru: `Английский`,
    en: `
    English`,
    de: `Englisch`,
    taj: `
    Англисӣ`,
  },
  "english-level": {
    ru: `Словарь, документ и слушание`,
    en: `Word, document and listening`,
    de: `Wort, Document und Hören`,
    taj: `
    Луғат, документ ва шунид
  `,
  },
  russian: {
    ru: `Русский`,
    en: `
    Russian`,
    de: `Russisch`,
    taj: `
    Русӣ`,
  },
  "russian-level": {
    ru: `Бегло`,
    en: `Fluenlty`,
    de: `Fließend`,
    taj: `озодона`,
  },
  german: {
    ru: `Немецкий`,
    en: `German`,
    de: `Deutsch`,
    taj: `Олмонӣ`,
  },
  "german-level": {
    ru: `Уровнь B2`,
    en: `B2 Level`,
    de: `B2 Niveau`,
    taj: `Сатҳи B2`,
  },
  tajik: {
    ru: `Таджикский`,
    en: `Tajik`,
    de: `Tadschikisch`,
    taj: `Тоҷикӣ`,
  },
  "tajik-level": {
    ru: `Родной язык`,
    en: `Native language`,
    de: `Muttersprache`,
    taj: `Забони модарӣ`,
  },
  persian: {
    ru: `Персидский`,
    en: `Persian`,
    de: `Persisch`,
    taj: `Форсӣ`,
  },
  fullname: {
    ru: `Хуршед Ахмаджонов`,
    en: `Khurshed Ahmadjonov`,
    de: `Chursched Ahmadschonov`,
    taj: `Хуршед Ахмадҷонов`,
  },
};

// Перенаправить на url с указанием языка
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  //   console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;

  //    console.log(document.querySelector(".ing-chip"))
  for (let keys in langArr) {
    document.querySelector("title").innerHTML = langArr["unit"][hash];
    if (document.querySelector(".ing-" + keys) !== null) {
      //   document.querySelector(`.ing-${keys}`).innerHTML = langArr[keys][hash];
      Array.from(document.querySelectorAll(`.ing-${keys}`)).forEach((els) => {
        els.textContent = langArr[keys][hash];
        // nextWord = els;
 
      });

      if (select.value === "taj") {
        document.querySelectorAll(".ing-my").forEach((els) => {
          els.parentElement.classList.add("reverse-words");
        });
      }
    }

  }

  return hash;
}

const locationHash = changeLanguage();

// Toggle class to body to get other styles of variables
sunMoon.addEventListener("click", function () {
  document.body.classList.toggle("light");
});

select.addEventListener("change", changeURLLanguage);

var typed = new Typed(".typed", {
  strings: [
    langArr["typed"][locationHash][0],
    langArr["typed"][locationHash][1],
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

//  changeLanguage()

setting.addEventListener("click", function () {
  switcher.classList.toggle("active");
});

let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;


    if (top >= offset - Math.floor(height / 2) && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

const alternateStyles = document.querySelectorAll(".alternate-color");

function setColor(color) {
  alternateStyles.forEach(function (style) {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
const switcherColor = document.querySelectorAll(".colors li");

for (i = 0; i < switcherColor.length; i++) {
  switcherColor[i].addEventListener("click", function () {
    switcherColor.forEach(function (e) {
      e.classList.remove("active-color");
    });

    this.classList.add("active-color");
  });
}
