
const menu = document.getElementById("NavButton");
const menuOverlay = document.getElementById("menuOverlay");
const menubutton = document.getElementById("menubutton");
const menubutton1 = document.getElementById("menubutton1");
const menubutton2 = document.getElementById("menubutton2");
const menubutton3 = document.getElementById("menubutton3");
const themeButton = document.getElementById("themeI");
const themeMbileButton = document.getElementById('MobileTheme');
const CloseOverLayMenue = document.getElementById('close');
const LangSwitchButton = document.getElementById('Langi');
const LangSwitchButtonMobiel =document.getElementById('LangiMobile')
let langauage = localStorage.getItem('lang');
let Theme = localStorage.getItem('Theme');
let lightMode = true;
let DarkMode = false;

window.onload = function() {
  
    langauage = localStorage.getItem('lang')
  if(localStorage.getItem('lang') === 'en'){
    setEnglish();

    
  }
  else{
    setArabic();
  }
  if(localStorage.getItem("Theme") === 'dark'){
    SetDarkMode();
  }
  else{
    SetLightMode();
  }
}
const Translations = {
    en: {
        headertitle:"Developer",
        home: "Home",
        Contact : "Contact",
        Serverice : "Services",
        Works: "Works",
        greet: "Hi, I am",
        MyName: "Moath Yassen",
        JobName: "FullStack Web Developer",
        description: "I am using C# for backend with sql server,and html css js for front end.",
        CvDownload: "Download CV",
        Contactme: "Contact",
        jobYearEx: "1 year job",
        NumOfProjects:"11+ projects",
        OnilineExistence:"Online 24/7",
        ServericeTitle: "I Provide A Range Of Services",
        Frontend: "Front-End",
        backend:"Backend",
        dataBase:"DataBase",
        ProblemSolving:"Problem Solving",
        buttonTxt:"View Sams",
        Ser_card_discription1:"Clean, responsive UI design that blends style, usability, and performance.and UX Support.",
        Ser_card_discription2:"Clean, responsive UI design that blends style, usability, and performance.and UX Support.",
        Ser_card_discription3:"Clean, responsive UI design that blends style, usability, and performance.and UX Support.",
        Ser_card_discription4:"Clean, responsive UI design that blends style, usability, and performance.and UX Support.",
        Portfolio:"Portifolio",
        BestWorkTitle:"My Best Projects",

        ContactTitle: "Let's Contact",
        contactDesc:"If my work was good , i am so glad for that for orders,and i will do my best to offer you the nicest project.",
        emialtitle: "Email:",
        emailName: "Name",
        Youremail:"Your email:",
        YourSubject:"Subject:",
        ourDescrption:"Your Message(Optional):",
        sendButtontxt:"Send",
        rightsTitle:"Moath Yaseen Jasam - All rights reserved. -2025- ",
        VersionDescription: "Version 3.0",
        EcommerceAppTitle:"E-commerce App",
        Ecdes:"Shop smarter with our e-commerce app—fast,secure, and packed with deals. Disdcover, buy, and track orders all in one place!",
        ChatAppTitle:"Chat App",
        Chatappdes:"A vibrant chat app for instant messaging—text, voice, video,emojis, and group chats. Stay connected with friends,share media, and enjoy secure, real-time conversations across devices.",
        ChessAppTitle:"Chess App",
        ChessAppdes:"A sleek chess app for all skill levels—play online or offline,solve puzzles, learn tactics, and track your progress.",
        CalculatorApp:"Calculator App",
        CalculatorDes:"Simple, fast calculator for basic math—add, subtract, multiply, divide with ease."




    },
    ar: {
        headertitle: "مطور",
        home: "الرئيسية",
        Contact : "الاتصال",
        Serverice : "الخدمات",
        Works: "الاعمال",
        greet: "مرحبا, انا",
        MyName: "معاذ ياسين",
        JobName: "مطور مسار كامل",
        description: ".انا استخدم لغة سي شارب للواجهات الخلفية مع اس كيو ال سيرفر و اج تي ام ال سي اس اس و جافا سكربت للواجهات الامامية",
        CvDownload: "حمل السيرة الذاتية",
        Contactme: "اتصل بي",
        jobYearEx: " سنة عمل 1",
        NumOfProjects:"11 مشروع",
        OnilineExistence:"حظور انترنت دائم",
        ServericeTitle: "انا اقدم عدد من الخدمات.",
        Frontend: "واجهات امامية",
        backend:"واجهات خلفية",
        dataBase:"قواعد بيانات",
        ProblemSolving:"حل مشاكل",
        buttonTxt:"اطلع",
        Ser_card_discription1:"واجهة المستخدم الأمامية تهتم بتصميم وتنسيق الصفحات، وتفاعل المستخدم مع الموقع بشكل مباشر وجذاب.",
        Ser_card_discription2:"الواجهة الخلفية تدير البيانات والمنطق، تربط الواجهة الأمامية بالخوادم وتؤمن العمليات خلف الكواليس.",
        Ser_card_discription3:"قاعدة البيانات تخزن المعلومات بشكل منظم، وتُستخدم لاسترجاع وتحديث البيانات بكفاءة وأمان عند الطلب.",
        Ser_card_discription4:"حل المشكلات يعني التفكير المنطقي لإيجاد حلول فعالة، وتحليل الأخطاء وتطوير طرق لتجاوز التحديات التقنية.",
        Portfolio:"معرض الاعمال",
        BestWorkTitle:"افضل اعمالي",
        ContactTitle:"دعنا نتواصل:",
        contactDesc:"إذا كان عملي جيدًا فأنا سعيد جدًا بذلك، وبالنسبة للطلبات سأبذل قصارى جهدي لأقدم لكم أفضل مشروع ممكن.",
        emialtitle: "ايميل:",
        emailName: "الاسم:",
        Youremail:"ايميلك:",
        YourSubject:"موضوعك:",
        YourDescrption:"معلومات اكثر (اختياري):",
        sendButtontxt:"ارسل",
        rightsTitle:"كل الحقوق محفوظة لصاحب الموقع-2025- ",
        VersionDescription: "النسخة 3.0",
        EcommerceAppTitle:"متجر الكتروني",
        Ecdes:"تسوّق بذكاء مع تطبيقنا للتجارة الإلكترونية — سريع، آمن، ومليء بالعروض. اكتشف، اشترِ، وتابع طلباتك في مكان واحد!",
        ChatAppTitle:"تطبيق تواصل",
        Chatappdes:"تطبيق دردشة نابض بالحياة للمراسلة الفورية — نصوص، صوت، فيديو، رموز تعبيرية، ومحادثات جماعية. ابقَ على اتصال مع الأصدقاء، شارك الوسائط، واستمتع بمحادثات آمنة وفورية عبر جميع الأجهزة.",
        ChessAppTitle:"لعبة شطرنج",
        ChessAppdes:"تطبيق شطرنج أنيق لجميع المستويات — العب عبر الإنترنت أو بدون اتصال، حل الألغاز، تعلّم التكتيكات، وتابع تقدمك.",
        CalculatorApp:"الة حاسبة",
        CalculatorDes:"آلة حاسبة بسيطة وسريعة للعمليات الأساسية — جمع، طرح، ضرب، وقسمة بسهولة."


    }
}
function SetLocatEnviromentVariables () {
  if(Theme === "")
  {
    localStorage.setItem('Theme','Light')
  }
  


}

function SetLightMode() {
  document.documentElement.style.setProperty('--mainBodyColor','#f7f7f7bb');
  document.documentElement.style.setProperty('--mainColor','rgb(66, 66, 192)');
  document.documentElement.style.setProperty('--mainHeadColor','#ffffffd2');
  document.documentElement.style.setProperty('--TitlesColor','black');
  document.documentElement.style.setProperty('--ShadowColor','rgb(207, 207, 207)')
  document.documentElement.style.setProperty('--SerCardColor','white')
  document.documentElement.style.setProperty('--serCardIconColor','black')
  document.documentElement.style.setProperty('--projectCardTitleColor','white')
  document.documentElement.style.setProperty('--FooterSectionbackgroundColor','white')
  document.documentElement.style.setProperty('--emailScetionBackgroundColor','#f7f7f7c2')
  document.documentElement.style.setProperty('--contactAndEmailSEctiontitlesColor','rgb(94, 94, 94)')
  document.documentElement.style.setProperty('--mainColorHover','rgb(149, 149, 255)')
  document.documentElement.style.setProperty('--mobileBarColor','gray')
  document.documentElement.style.setProperty('--menuColoricon','rgb(216, 216, 216)')
  Theme = "light"


  localStorage.setItem('Theme',Theme);
  console.log(localStorage.getItem('Theme').toString())

}

function SetDarkMode() {

  document.documentElement.style.setProperty('--mainBodyColor','#1C1C1E');
  document.documentElement.style.setProperty('--mainColor','#4FD1C5');
  document.documentElement.style.setProperty('--mainHeadColor','black')
  document.documentElement.style.setProperty('--TitlesColor','white');
  document.documentElement.style.setProperty('--ShadowColor','rgb(37, 37, 37)')
  document.documentElement.style.setProperty('--SerCardColor','black')
  document.documentElement.style.setProperty('--serCardIconColor','#4FD1C5')
  document.documentElement.style.setProperty('--projectCardTitleColor','#4FD1C5')
  document.documentElement.style.setProperty('--FooterSectionbackgroundColor','#5b5b5b')
  document.documentElement.style.setProperty('--emailScetionBackgroundColor','#5b5b5b')
  document.documentElement.style.setProperty('--contactAndEmailSEctiontitlesColor','#cececeff')
  document.documentElement.style.setProperty('--mainColorHover','#4FD1C5')
  document.documentElement.style.setProperty('--mobileBarColor','black')
  document.documentElement.style.setProperty('--menuColoricon','#4FD1C5');

  Theme = "dark";

  localStorage.setItem('Theme',Theme);


}

function switchTheme() {
  if(Theme === "light" || Theme === ""){
    SetDarkMode();
  }
  else{
    SetLightMode();
  }
}



themeButton.addEventListener("click",switchTheme);
themeMbileButton.addEventListener("click",switchTheme)
menu.addEventListener("click", () => {
  menuOverlay.style.display = "flex";
});

menubutton.addEventListener("click", () => {
  menuOverlay.style.display = "none";
});
menubutton1.addEventListener("click", () => {
  menuOverlay.style.display = "none";
});
menubutton2.addEventListener("click", () => {
  menuOverlay.style.display = "none";
});
menubutton3.addEventListener("click", () => {
  menuOverlay.style.display = "none";
});

CloseOverLayMenue.addEventListener("click",() => {
  menuOverlay.style.display = "none";
})

function setEnglish(){
  langauage = localStorage.getItem('lang');

  if( langauage=== "en"){
      
      document.documentElement.lang = langauage;
      document.body.dir = "ltr";
      document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = Translations[langauage][key];
  }); 

  }
  
}
function setArabic(){
  langauage = localStorage.getItem('lang')
  if(langauage === "ar" ){
      langauage = "ar";
      document.documentElement.lang = langauage;
      document.body.dir = "rtl";
      document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = Translations[langauage][key];
  }); 
  }
  
}



function switchLanguage() {

  if(localStorage.getItem('lang') === "en")
  {
    localStorage.setItem('lang', 'ar');
    setArabic();

  }
  else{
    localStorage.setItem('lang','en');
    setEnglish();
  }
  // if(localStorage.getItem('lang') === "en")
  // {
  //       setArabic();
  //       document.documentElement.lang = 'ar';
  //       localStorage.setItem('lang','ar')
  //       console.log(1)
  // }
  
  // else
  // {
  //   setEnglish();
  //     langauage = "en"
  //     document.documentElement.lang = 'en';
  //     localStorage.setItem('lang','en')
  //     console.log(2)
  // }

}

LangSwitchButton.addEventListener("click",switchLanguage);
LangSwitchButtonMobiel.addEventListener("click",switchLanguage)