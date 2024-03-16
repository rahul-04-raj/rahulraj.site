const main_menu = 
"\n" +
"[[;white;]|] [[b;#ffbc42;]about]               [[;lightblue;]- About me]\n" +
"[[;white;]|] [[b;#ffbc42;]education]           [[;lightblue;]- My education background]\n" +
"[[;white;]|] [[b;#ffbc42;]resume]              [[;lightblue;]- My Resumé ]\n" +
"[[;white;]|] [[b;#ffbc42;]projects]            [[;lightblue;]- All my Projects]\n" +
"[[;white;]|] [[b;#ffbc42;]skills]              [[;lightblue;]- Technical Proficiencies]\n" +
"[[;white;]|] [[b;#ffbc42;]credits]             [[;lightblue;]- How I made this website]\n" +
"[[;white;]|] [[b;#ffbc42;]contact]             [[;lightblue;]- You can connect with me here]\n";


const about_me = "[[;lightblue;]Hey, Rahul Here, as an electrical undergrad and tech enthusiast, \nI just can't get enough of diving into the AI/ML and Robotics realms,\nbecause, you know, who needs sleep when there's so much innovation to chase?]\n"

const education = 
"[[;white;]|] [[b;#f6bd60;]Rajiv Gandhi Institute of Petroleum Technology]  (2022-26) (Amethi, Uttar Pradesh)\n"+
"   [[;skyblue;]- B.Tech in Electrical Engineering (Major: EV)]" +
"   [[i;skyblue;]- CPI : 7.71 \n]" +
"  \n"+
"[[;white;]|] [[b;#f6bd60;]Nalanda Academy, Kota, Rajasthan]                  [[;skyblue;]- 12th - 76%]\n" +
"[[;white;]|] [[b;#f6bd60;]Nalanda Academy, Kota, Rajasthan]                  [[;skyblue;]- 10th - 79%]\n";


const resume = "[[;;]Rahul_raj_Resume.pdf]";

const projects =
"\n" +
"[[;#ffbc42;]WiFi-Based Joint Activity and Location Estimation Using Deep Learning       (May, 2023 - Ongoing)\n]" +
"[[;skyblue;]  - Developing a system that can accurately recognize human activities based on Wi-Fi signal data (CSI).]\n" +
"[[;skyblue;]  - Developed and Implemented a Convolutional Neural Network (CNN) model on CSI Jordanian Dataset"+
                    "to recognize \n    12 different activities and got more than 92% accuracy.]\n" +
"[[;skyblue;]  - Collected CSI (Channel State Information) data for different activities using ESP32 Microcontrollers\n" +       
                   "    and processed it using several Python libraries.]\n" +
"[[;skyblue;]  - Used TensorFlow, NumPy, Pandas, Matplotlib, OpenCV, Scikit-learn to implement CNN and also\n"+
                   "    made use of various technologies.]\n"+
"\n" +
"[[;#ffbc42;]Real-Time Face Detection using TensorFlow and Python        (Dec, 2023)\n]" +
"[[;#ffbc42;]  Github] [[;lightblue;]- https://github.com/rahul-04-raj/Real-Time-Face-Detection]\n"+
"[[;skyblue;]  - Developed a Deep learning face detection model using TensorFlow’s Functional API, optimizing architecture \n"+
                 "    for real-time performance, and employing a custom loss function and optimizer for efficient learning.]\n"+
"[[;skyblue;]  - Successfully collected and annotated a diverse dataset using OpenCV and LabelMe for training the model.]\n" +
"[[;skyblue;]  - Successfully tested the model in real-time detection scenarios, achieving accurate and reliable results,\n"+
                 "    showcasing its potential for deployment in practical applications.]\n";

  


const skills = 
"\n" + 
"[[b;#ffbc42;]Programming Languages]       \n" +
"[[;white;]|] [[b;#ffbc42;]Python]              [[;skyblue;]- Intermediate]\n" +
"[[;white;]|] [[b;#ffbc42;]C++]                 [[;skyblue;]- Beginner]\n" +
"[[;white;]|] [[b;#ffbc42;]C]                   [[;skyblue;]- Beginner]\n" +
"[[;white;]|] [[b;#ffbc42;]SQL]                 [[;skyblue;]- Beginner]\n" +
" \n"+
"[[b;#ffbc42;]ML/DL and Data Science]       \n" +
"[[;white;]|] [[b;#ffbc42;]Tensorflow]          [[;skyblue;]- Intermediate]\n" +
"[[;white;]|] [[b;#ffbc42;]OpenCV]              [[;skyblue;]- Beginner]\n" +
"[[;white;]|] [[b;#ffbc42;]Scikit-learn]        [[;skyblue;]- Beginner]\n" +
"[[;white;]|] [[b;#ffbc42;]NumPy]               [[;skyblue;]- Intermediate]\n" +
"[[;white;]|] [[b;#ffbc42;]Pandas]              [[;skyblue;]- Intermediate]\n" +
"[[;white;]|] [[b;#ffbc42;]Matplotlib]          [[;skyblue;]- Intermediate]\n" +
"[[;white;]|] [[b;#ffbc42;]Seaborn]             [[;skyblue;]- Intermediate]\n" +
"[[;white;]|] [[b;#ffbc42;]Tableau]             [[;skyblue;]- Beginner]\n";

const credits = 
"\n" + 
"[[;white;]|] [[;lightblue;]Site built by] [[;#ffbc42;]Rahul Raj]\n" +
"[[;white;]|] [[;lightblue;]Using] [[;#ffbc42;]Jquery Terminal Emulator] [[;lightblue;]by] [[g;#ffbc42;]Jakub Jankiewicz]: http://terminal.jcubic.pl\n";

const socials = 
"\n" + 
"[[;white;]|] [[b;#ffbc42;]LinkedIn]            [[;skyblue;]- https://www.linkedin.com/in/rahul-04-raj]\n" +
"[[;white;]|] [[b;#ffbc42;]E-Mail]              [[;skyblue;]- 22ev3022@rgipt.ac.in]\n" +
"[[;white;]|] [[b;#ffbc42;]Github]              [[;skyblue;]- https://github.com/rahul-04-raj]\n"+
"[[;white;]|] [[b;#ffbc42;]Instagram]           [[;skyblue;]- https://www.instagram.com/rahul_4real]\n" ;

$("body").terminal(
  {
    menu: function () {
      this.echo(main_menu);
      window.scrollTo(0, document.body.scrollHeight);
    },

    commands: function () {
      this.echo(main_menu);
      window.scrollTo(0, document.body.scrollHeight);
    },

    ls: function () {
      this.echo(main_menu);
      window.scrollTo(0, document.body.scrollHeight);
    },

    about: function () {
      this.echo(about_me);
    },

    education: function () {
      this.echo(education);
    },

    skills: function () {
      this.echo(skills);
    },

    resume: function () {
      window.location.href = "Rahul_Raj_Resume.pdf";
    },

    projects: function () {
      this.echo(projects);
    },

    experience: function () {
      this.echo(exp);
    },

    credits: function () {
      this.echo(credits);
    },

    contact: function () {
      this.echo(socials);
    },

    hola: function () {
      this.echo("Hello, Welcome to this terminal.");
    },

    hello: function (what) {
      this.echo("Hello, " + what + ". Welcome to my portfolio.");
    },

    cat: function (width, height) {
      const img = $(
        '<img src="https://placekitten.com/' + width + "/" + height + '">'
      );
      img.on("load", this.resume);
      this.pause();
      this.echo(img);
    },

    helloo: function () {
      this.echo("helloooooooooo");
    },
  },
  {
    greetings: greetings.innerHTML
  }
);
