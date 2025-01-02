
const questions = [
  {
    category: "programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in Python?",
        options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: 0,
      },
      {
        question: "In JavaScript, how do you create a function?",
        options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
        correctAnswer: 0,
      },
      {
        question: "In C, how do you define a function?",
        options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a characteristic of Python?",
        options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
        correctAnswer: 3,
      },
      {
        question: "Which language is used for Android development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'forEach()' method in JavaScript?",
        options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a semantic HTML element?",
        options: ["<header>", "<footer>", "<div>", "<article>"],
        correctAnswer: 2,
      },
      {
        question: "What is the primary purpose of a 'for' loop in programming?",
        options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
        correctAnswer: 0,
      },
      {
        question: "Which data structure is ideal for LIFO (Last In First Out)?",
        options: ["Queue", "Stack", "Linked list", "Array"],
        correctAnswer: 1,
      },
      {
        question: "Which command is used in Git to store changes in the repository?",
        options: ["git commit", "git push", "git pull", "git add"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'map()' function do in JavaScript?",
        options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
        correctAnswer: 2,
      },
      {
        question: "What is an IDE?",
        options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a feature of object-oriented programming?",
        options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
        correctAnswer: 0,
      },
      {
        question: "What does SQL stand for?",
        options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
        correctAnswer: 3,
      },
      {
        question: "Which of these is an example of a non-relational database?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in CSS?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following algorithms is used to sort an array by comparing elements?",
        options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'finally' block in Java do?",
        options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
        correctAnswer: 2,
      },
      {
        question: "Which data structure is best for searching elements quickly?",
        options: ["Binary search tree", "Array", "Linked list", "Queue"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for a JavaScript if statement?",
        options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
        correctAnswer: 0,
      },
      
  {
    question: "What is the primary purpose of a 'try-catch' block in programming?",
    options: ["To create a new function", "To handle potential errors", "To define a loop", "To declare variables"],
    correctAnswer: 1,
  },
  {
    question: "Which programming language is known for its use in machine learning and data science?",
    options: ["Java", "C++", "Python", "Ruby"],
    correctAnswer: 2,
  },
  {
    question: "What does API stand for?",
    options: ["Advanced Programming Interface", "Application Programming Interface", "Automated Programming Instruction", "Application Process Integration"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is NOT a programming paradigm?",
    options: ["Object-Oriented", "Functional", "Procedural", "Numerical"],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of the 'async/await' syntax in JavaScript?",
    options: ["To create variables", "To handle asynchronous operations", "To define classes", "To create loops"],
    correctAnswer: 1,
  },
  
  {
    question: "What is the primary purpose of a 'try-catch' block in programming?",
    options: ["To create a new function", "To handle potential errors", "To define a loop", "To declare variables"],
    correctAnswer: 1,
  },
  {
    question: "Which programming language is known for its use in machine learning and data science?",
    options: ["Java", "C++", "Python", "Ruby"],
    correctAnswer: 2,
  },
  {
    question: "What does API stand for?",
    options: ["Advanced Programming Interface", "Application Programming Interface", "Automated Programming Instruction", "Application Process Integration"],
    correctAnswer: 1,
  },
  {
    question: "What is a closure in JavaScript?",
    options: ["A type of loop", "A function with access to its outer function's scope", "A method to close connections", "A way to define global variables"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of 'npm' in Node.js?",
    options: ["Network Package Manager", "Node Package Manager", "New Programming Method", "Network Protocol Management"],
    correctAnswer: 1,
  },
  {
    question: "What does the term 'recursion' mean in programming?",
    options: ["A type of loop", "A function that calls itself", "A method to create variables", "A way to define classes"],
    correctAnswer: 1,
  },
  {
    question: "What is a 'promise' in JavaScript?",
    options: ["A guarantee of code execution", "An object representing eventual completion of async operation", "A way to declare variables", "A method to create functions"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary use of 'Docker'?",
    options: ["Database management", "Container virtualization", "Web design", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What does 'ORM' stand for in database programming?",
    options: ["Object Relational Mapping", "Operational Resource Management", "Object Rendering Method", "Operational Relationship Model"],
    correctAnswer: 0,
  },
  {
    question: "What is GraphQL primarily used for?",
    options: ["Database design", "API query language", "Frontend styling", "Backend security"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary purpose of 'webpack'?",
    options: ["Web design", "Module bundling", "Database management", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What does 'REST' stand for in web services?",
    options: ["Reliable Efficient Service Transfer", "Representational State Transfer", "Remote Execution Service Type", "Robust Efficient System Transfer"],
    correctAnswer: 1,
  },
  {
    question: "What is a 'microservice' architecture?",
    options: ["Small-scale programming", "Architectural style of building distributed systems", "A type of database", "A programming language feature"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary use of 'Redux' in web development?",
    options: ["Backend routing", "State management", "Database design", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What does 'SOLID' represent in object-oriented design?",
    options: ["Software Object-Oriented Logical Interface Design", "Principles of object-oriented programming", "A design pattern", "A coding standard"],
    correctAnswer: 1,
  },
  {
    question: "What is 'TypeScript' primarily used for?",
    options: ["Database management", "Typed superset of JavaScript", "Web design", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of 'Babel' in JavaScript?",
    options: ["Code compilation", "Code transpilation", "Database management", "Network routing"],
    correctAnswer: 1,
  },
  {
    question: "What does 'JWT' stand for?",
    options: ["JavaScript Web Token", "Java Web Transfer", "JSON Web Token", "JavaScript Web Transfer"],
    correctAnswer: 2,
  },
  {
    question: "What is the primary use of 'Kubernetes'?",
    options: ["Container orchestration", "Database management", "Web design", "Network security"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'generator function' in JavaScript?",
    options: ["A function that creates other functions", "A function that can be paused and resumed", "A method to create loops", "A way to define variables"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of 'garbage collection' in programming languages?",
    options: ["To delete unnecessary code", "To automatically manage memory allocation", "To optimize network traffic", "To compress source code"],
    correctAnswer: 1,
  },
  {
    question: "What does 'HTTPS' stand for?",
    options: ["High Transfer Protocol Secure", "Hyper Text Transfer Protocol Secure", "Hyper Text Transmission Protocol Secure", "High Text Transfer Protocol System"],
    correctAnswer: 1,
  },
  {
    question: "What is a 'mutex' in concurrent programming?",
    options: ["A type of variable", "Mutual exclusion mechanism", "A programming language", "A database query"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary purpose of 'continuous integration'?",
    options: ["To continuously update software", "To automatically merge code changes", "To test and integrate code frequently", "To monitor network traffic"],
    correctAnswer: 2,
  },
  {
    question: "What does 'SSH' stand for?",
    options: ["Secure Shell", "System Shell Host", "Secure Socket Host", "System Secure Hosting"],
    correctAnswer: 0,
  },
  {
    question: "What is 'Big O Notation' used for?",
    options: ["Measuring code complexity", "Creating large objects", "Defining network protocols", "Designing user interfaces"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'coroutine' in programming?",
    options: ["A type of router", "A function that can be paused and resumed", "A network protocol", "A database connection"],
    correctAnswer: 1,
  },
  {
    question: "What does 'ACID' stand for in database transactions?",
    options: ["Advanced Computational Integrated Design", "Atomicity, Consistency, Isolation, Durability", "Automated Code Integration Database", "Advanced Computational Interface Design"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary use of 'WebSockets'?",
    options: ["Web page styling", "Real-time bidirectional communication", "Database management", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What is 'functional programming' primarily focused on?",
    options: ["Creating functions", "Treating computation as evaluation of mathematical functions", "Object-oriented design", "Network programming"],
    correctAnswer: 1,
  },
  {
    question: "What does 'CDN' stand for?",
    options: ["Code Delivery Network", "Content Delivery Network", "Centralized Data Network", "Computational Distributed Network"],
    correctAnswer: 1,
  },
  {
    question: "What is 'memoization' in programming?",
    options: ["Memory optimization", "Caching function results", "Creating memory leaks", "Defining memory structures"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary purpose of 'gRPC'?",
    options: ["Graphic rendering", "Remote procedure call framework", "Global resource planning", "Graphic design tool"],
    correctAnswer: 1,
  },
  {
    question: "What does 'CORS' stand for?",
    options: ["Cross-Origin Resource Sharing", "Centralized Object Rendering System", "Computational Object Rendering Scheme", "Cross-Operational Resource System"],
    correctAnswer: 0,
  },
  {
    question: "What is 'lazy loading' in programming?",
    options: ["Delaying code execution", "Deferring resource initialization", "Slow programming technique", "Lazy coding practice"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary use of 'GraphQL'?",
    options: ["Graph database management", "API query language", "Graphic design", "Network routing"],
    correctAnswer: 1,
  },
  {
    question: "What does 'REPL' stand for?",
    options: ["Rapid Execution Programming Language", "Read-Eval-Print Loop", "Recursive Execution Programming Logic", "Rapid Evaluation Programming Library"],
    correctAnswer: 1,
  },
  {
    question: "What is 'polymorphism' in object-oriented programming?",
    options: ["Multiple inheritance", "Ability of objects to take on multiple forms", "Creating multiple objects", "Defining multiple variables"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary purpose of 'service workers'?",
    options: ["Managing web services", "Enabling offline functionality in web apps", "Creating server-side logic", "Managing network requests"],
    correctAnswer: 1,
  },
  {
    question: "What does 'IoT' stand for?",
    options: ["Internet of Things", "Internal Operating Technology", "Integrated Online Transmission", "Intelligent Operational Tools"],
    correctAnswer: 0,
  },  
  {
    question: "What is the purpose of 'virtual memory' in operating systems?",
    options: ["To create virtual reality", "To extend physical memory using disk space", "To encrypt data", "To manage network connections"],
    correctAnswer: 1,
  },
  {
    question: "What does 'CI/CD' stand for in software development?",
    options: ["Continuous Integration/Continuous Deployment", "Code Improvement/Code Design", "Computer Interface/Computer Development", "Critical Information/Critical Design"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'deadlock' in concurrent programming?",
    options: ["A programming error", "A situation where two processes are waiting for each other to release resources", "A type of loop", "A network connection issue"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary purpose of 'blockchain' technology?",
    options: ["Social networking", "Decentralized and secure record-keeping", "Web design", "Database management"],
    correctAnswer: 1,
  },
  {
    question: "What does 'TDD' stand for in software development?",
    options: ["Technical Design Development", "Test-Driven Development", "Total Database Design", "Technological Deployment Direction"],
    correctAnswer: 1,
  },
  {
    question: "What is 'machine learning' primarily used for?",
    options: ["Creating physical machines", "Enabling computers to learn from data", "Network security", "Web design"],
    correctAnswer: 1,
  },
  {
    question: "What is a 'singleton' in object-oriented programming?",
    options: ["A type of variable", "A class that allows only one instance of itself", "A programming design pattern", "A method to create objects"],
    correctAnswer: 1,
  },
  {
    question: "What does 'NoSQL' typically mean?",
    options: ["No Structured Query Language", "Not Only SQL", "New Object SQL", "Network Object SQL"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary use of 'Apache Kafka'?",
    options: ["Web hosting", "Distributed streaming platform", "Database management", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What is 'serverless computing'?",
    options: ["Computing without servers", "Cloud computing model where cloud provider manages infrastructure", "A type of programming language", "A network protocol"],
    correctAnswer: 1,
  },
  {
    question: "What does 'PWA' stand for?",
    options: ["Personal Web Application", "Progressive Web App", "Private Web Access", "Professional Web Architecture"],
    correctAnswer: 1,
  },
  {
    question: "What is 'dependency injection'?",
    options: ["A way to inject code into dependencies", "A design pattern for implementing inversion of control", "A method of creating variables", "A type of loop"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary purpose of 'Terraform'?",
    options: ["Web design", "Infrastructure as Code", "Database management", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What does 'RAG' stand for in AI?",
    options: ["Retrieval Augmented Generation", "Random Access Generator", "Recursive Algorithmic Growth", "Rapid Application Generation"],
    correctAnswer: 0,
  },
  {
    question: "What is 'edge computing'?",
    options: ["Computing at the edge of a network", "A type of web design", "A programming language", "A database technique"],
    correctAnswer: 0,
  },
  {
    question: "What does 'MLOps' stand for?",
    options: ["Machine Learning Operations", "Mobile Learning Optimization", "Managed Learning Orchestration", "Machine Linked Operations"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary use of 'Apache Spark'?",
    options: ["Web hosting", "Big data processing", "Network security", "Database design"],
    correctAnswer: 1,
  },
  {
    question: "What is 'quantum computing'?",
    options: ["A type of classical computing", "Computing using quantum-mechanical phenomena", "A programming language", "A network protocol"],
    correctAnswer: 1,
  },
  {
    question: "What does 'BERT' stand for in natural language processing?",
    options: ["Basic Encoding Representation Transformer", "Bidirectional Encoder Representations from Transformers", "Basic Encoder Recursive Technique", "Bidirectional Encoding Recursive Transformer"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary purpose of 'GraphQL'?",
    options: ["Graph database management", "Flexible API query language", "Web design", "Network routing"],
    correctAnswer: 1,
  },
  {
    question: "What does 'WebAssembly' enable?",
    options: ["Web assembly programming", "High-performance code in web browsers", "Web server management", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What is 'reactive programming'?",
    options: ["A type of active programming", "Programming with asynchronous data streams", "A network protocol", "A database technique"],
    correctAnswer: 1,
  },
  {
    question: "What does 'SOLID' principle stand for?",
    options: ["Secure Object-Oriented Logical Interface Design", "Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion", "Structured Object-Linked Interface Design", "Secure Object-Linked Interface Development"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary use of 'Apache Airflow'?",
    options: ["Web hosting", "Workflow management", "Network security", "Database design"],
    correctAnswer: 1,
  },
  {
    question: "What does 'GANs' stand for in machine learning?",
    options: ["Generative Adversarial Networks", "Global Artificial Neuron Systems", "Generative Algorithmic Networks", "Global Artificial Network Systems"],
    correctAnswer: 0,
  },
  {
    question: "What is 'zero-knowledge proof'?",
    options: ["A security technique", "A cryptographic method to prove knowledge without revealing information", "A programming language", "A network protocol"],
    correctAnswer: 1,
  },
  {
    question: "What does 'MQTT' stand for?",
    options: ["Message Queuing Telemetry Transport", "Managed Query Transmission Tool", "Mobile Queuing Transfer Technology", "Messaging Queue Transfer Technique"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'Kubernetes'?",
    options: ["Web design", "Container orchestration", "Database management", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What does 'YAGNI' stand for in software development?",
    options: ["Yet Another Great Network Interface", "You Aren't Gonna Need It", "Young Agile Networking Implementation", "Yearly Agile Governance Network Interface"],
    correctAnswer: 1,
  },
  {
    question: "What is 'federated learning'?",
    options: ["A learning method for networks", "Machine learning technique that trains algorithms across decentralized devices", "A network security protocol", "A web design technique"],
    correctAnswer: 1,
  },
  {
    question: "What does 'CQRS' stand for?",
    options: ["Command Query Responsibility Segregation", "Computational Query Routing System", "Continuous Query Response Strategy", "Command Queuing Routing System"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary use of 'Apache Kafka'?",
    options: ["Web hosting", "Distributed streaming platform", "Network security", "Database management"],
    correctAnswer: 1,
  },
  {
    question: "What does 'DRY' stand for in programming?",
    options: ["Don't Repeat Yourself", "Dynamic Reusable Yield", "Develop Robust Yield", "Dynamic Recursive Yield"],
    correctAnswer: 0,
  },
  {
    question: "What is 'differential privacy'?",
    options: ["A privacy technique", "A method to add noise to data to protect individual privacy", "A programming language", "A network protocol"],
    correctAnswer: 1,
  },
  {
    question: "What does 'KISS' stand for in software design?",
    options: ["Keep It Simple, Stupid", "Key Interface Secure System", "Kernel Interface Secure Strategy", "Key Integrated Secure System"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'Apache Spark'?",
    options: ["Web hosting", "Big data processing", "Network security", "Database design"],
    correctAnswer: 1,
  },
  {
    question: "What does 'YOLO' stand for in computer vision?",
    options: ["You Only Look Once", "Yield Optimal Learning Optimization", "Young Optimal Learning Output", "Yearly Optimal Learning Objective"],
    correctAnswer: 0,
  },
  {
    question: "What is 'transfer learning' in machine learning?",
    options: ["Transferring data between systems", "Reusing a pre-trained model for a different but related problem", "A network protocol", "A web design technique"],
    correctAnswer: 1,
  },
  {
    question: "What does 'ACID' stand for in database transactions?",
    options: ["Atomic, Consistent, Isolated, Durable", "Advanced Computational Integrated Design", "Automated Code Integration Database", "Algorithmic Computational Interface Design"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary use of 'TensorFlow'?",
    options: ["Web design", "Machine learning and deep learning", "Network security", "Database management"],
    correctAnswer: 1,
  },
  {
    question: "What does 'LIDAR' stand for?",
    options: ["Light Detection and Ranging", "Laser Imaging Detection and Ranging", "Laser Integrated Detection and Ranging", "Light Integrated Detection and Ranging"],
    correctAnswer: 0,
  },
  {
    question: "What is 'explainable AI'?",
    options: ["AI that can be easily understood", "A method to make AI decision-making processes transparent", "A programming language", "A network protocol"],
    correctAnswer: 1,
  },
  {
    question: "What does 'CRUD' stand for in database operations?",
    options: ["Create, Read, Update, Delete", "Computational Recursive Unified Design", "Continuous Robust Unified Development", "Computational Recursive Unified Development"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'Apache Hadoop'?",
    options: ["Web hosting", "Distributed storage and processing of big data", "Network security", "Database design"],
    correctAnswer: 1,
  },

  {
    question: "What is the purpose of a 'memory leak' in programming?",
    options: ["To improve performance", "Unintended memory consumption that is not freed", "To encrypt data", "To optimize code"],
    correctAnswer: 1,
  },
  {
    question: "What does 'RESTful' mean in web services?",
    options: ["Representational State Transfer architecture", "Remote Execution Service Technology", "Reliable Efficient Service Transfer", "Robust Execution Service Technique"],
    correctAnswer: 0,
  },
  {
    question: "What is 'fuzzing' in software testing?",
    options: ["A random data input technique to find software vulnerabilities", "A method of code compression", "A design pattern", "A network security protocol"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'Selenium'?",
    options: ["Web browser automation", "Database management", "Network security", "Code compilation"],
    correctAnswer: 0,
  },
  {
    question: "What does 'JIT' stand for in programming?",
    options: ["Just In Time compilation", "Java Integrated Tool", "Joint Interface Technology", "Java Interpretation Technique"],
    correctAnswer: 0,
  },
  {
    question: "What is 'metaprogramming'?",
    options: ["Programming about programming", "A type of network protocol", "A database design technique", "A web design method"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary use of 'GraphQL'?",
    options: ["Graph database management", "Flexible API query language", "Web design", "Network routing"],
    correctAnswer: 1,
  },
  {
    question: "What does 'SAML' stand for?",
    options: ["Secure Authentication Markup Language", "Security Assertion Markup Language", "Simple Authentication Management Language", "Secure Access Management Layer"],
    correctAnswer: 1,
  },
  {
    question: "What is 'event-driven programming'?",
    options: ["Programming based on events and event handlers", "A network communication protocol", "A database design method", "A web development technique"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of 'load balancing'?",
    options: ["Distributing network traffic across multiple servers", "Compressing code", "Encrypting data", "Managing database connections"],
    correctAnswer: 0,
  },
  {
    question: "What does 'SOAP' stand for in web services?",
    options: ["Simple Object Access Protocol", "Secure Object Authentication Protocol", "Standard Object Access Protocol", "Systematic Object Authentication Protocol"],
    correctAnswer: 0,
  },
  {
    question: "What is 'dependency management' in software development?",
    options: ["Managing software library and package dependencies", "Creating software dependencies", "Removing software dependencies", "Tracking code changes"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'Elasticsearch'?",
    options: ["Search and analytics engine", "Database management", "Network security", "Web design"],
    correctAnswer: 0,
  },
  {
    question: "What does 'OAuth' stand for?",
    options: ["Open Authentication", "Operational Authentication", "Optimized Authentication", "Open Authorization"],
    correctAnswer: 3,
  },
  {
    question: "What is 'immutability' in programming?",
    options: ["A state that cannot be modified after creation", "A method to encrypt data", "A network security protocol", "A database design technique"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary use of 'RabbitMQ'?",
    options: ["Message broker and queue management", "Web hosting", "Network security", "Database design"],
    correctAnswer: 0,
  },
  {
    question: "What does 'CSRF' stand for?",
    options: ["Cross-Site Request Forgery", "Comprehensive Security Request Framework", "Client-Side Request Filtering", "Comprehensive Site Request Function"],
    correctAnswer: 0,
  },
  {
    question: "What is 'aspect-oriented programming'?",
    options: ["A programming paradigm focusing on separating cross-cutting concerns", "A network communication method", "A database design technique", "A web development approach"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'Prometheus'?",
    options: ["Monitoring and alerting toolkit", "Web design", "Database management", "Network security"],
    correctAnswer: 0,
  },
  {
    question: "What does 'XSS' stand for?",
    options: ["Cross-Site Scripting", "Extensive Site Security", "Cross-Secure Scripting", "Extensive Scripting Security"],
    correctAnswer: 0,
  },
  {
    question: "What is 'concurrency' in programming?",
    options: ["Executing multiple tasks simultaneously", "A network security protocol", "A database design method", "A web development technique"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary use of 'Redis'?",
    options: ["In-memory data structure store", "Web hosting", "Network security", "Database design"],
    correctAnswer: 0,
  },
  {
    question: "What does 'JWT' stand for?",
    options: ["JavaScript Web Token", "Java Web Transfer", "JSON Web Token", "JavaScript Web Transfer"],
    correctAnswer: 2,
  },
  {
    question: "What is 'polymorphism' in object-oriented programming?",
    options: ["Multiple inheritance", "Ability of objects to take on multiple forms", "Creating multiple objects", "Defining multiple variables"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary purpose of 'Ansible'?",
    options: ["IT automation and configuration management", "Web design", "Database management", "Network security"],
    correctAnswer: 0,
  },
  {
    question: "What does 'YAML' stand for?",
    options: ["Yet Another Markup Language", "Young Automated Markup Language", "Yearly Automated Markup Language", "Yielding Automated Markup Language"],
    correctAnswer: 0,
  },
  {
    question: "What is 'continuous deployment'?",
    options: ["Automatically deploying code changes to production", "A network security protocol", "A database design technique", "A web development approach"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary use of 'Grafana'?",
    options: ["Monitoring and observability platform", "Web hosting", "Network security", "Database design"],
    correctAnswer: 0,
  },
  {
    question: "What does 'TOTP' stand for?",
    options: ["Time-based One-Time Password", "Temporary Operational Transfer Protocol", "Total Operational Transfer Process", "Timed Operational Transfer Protocol"],
    correctAnswer: 0,
  },
  {
    question: "What is 'idempotency' in programming?",
    options: ["An operation that produces the same result if executed multiple times", "A network security protocol", "A database design technique", "A web development approach"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'Postman'?",
    options: ["API development and testing tool", "Web design", "Database management", "Network security"],
    correctAnswer: 0,
  },
  {
    question: "What does 'RBAC' stand for?",
    options: ["Role-Based Access Control", "Robust Business Authentication Control", "Reliable Business Access Control", "Robust Business Automated Control"],
    correctAnswer: 0,
  },
  {
    question: "What is 'eventual consistency' in distributed systems?",
    options: ["A model where data will become consistent over time", "A network security protocol", "A database design technique", "A web development approach"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary use of 'Jenkins'?",
    options: ["Continuous integration and continuous delivery", "Web hosting", "Network security", "Database management"],
    correctAnswer: 0,
  },
  {
    question: "What does 'LDAP' stand for?",
    options: ["Lightweight Directory Access Protocol", "Lightweight Data Access Protocol", "Local Directory Authentication Protocol", "Local Data Access Protocol"],
    correctAnswer: 0,
  },
  {
    question: "What is 'rate limiting'?",
    options: ["Controlling the rate of incoming and outgoing traffic", "A network security protocol", "A database design technique", "A web development approach"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'Swagger'?",
    options: ["API documentation and design tool", "Web design", "Database management", "Network security"],
    correctAnswer: 0,
  },
  {
    question: "What does 'SAAS' stand for?",
    options: ["Software as a Service", "Secure Access Authentication System", "Systematic Access Authentication Service", "Secure Automated Authentication System"],
    correctAnswer: 0,
  },
  {
    question: "What is 'circuit breaker' in microservices?",
    options: ["A design pattern to prevent system failure", "A network security protocol", "A database design technique", "A web development approach"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary use of 'Kibana'?",
    options: ["Data visualization and exploration tool", "Web hosting", "Network security", "Database management"],
    correctAnswer: 0,
  },
  {
    question: "What does 'GDPR' stand for?",
    options: ["General Data Protection Regulation", "Global Data Privacy Regulation", "General Digital Privacy Regulation", "Global Digital Protection Regulation"],
    correctAnswer: 0,
  },
  {
    question: "What is 'blue-green deployment'?",
    options: ["A deployment strategy to reduce downtime", "A network security protocol", "A database design technique", "A web development approach"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'Traefik'?",
    options: ["Modern HTTP reverse proxy and load balancer", "Web design", "Database management", "Network security"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'dependency injection'?",
    options: ["To inject code into variables", "To manage object dependencies and improve modularity", "To create new programming languages", "To optimize network connections"],
    correctAnswer: 1,
  },
  {
    question: "What does 'AOP' stand for in software development?",
    options: ["Advanced Object Programming", "Aspect-Oriented Programming", "Automated Object Processing", "Advanced Operational Programming"],
    correctAnswer: 1,
  },
  {
    question: "What is the primary use of 'Webpack'?",
    options: ["Web design", "Module bundling and asset management", "Database creation", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What is 'memoization' in programming?",
    options: ["Memory management", "Caching function results to improve performance", "Creating memory leaks", "Defining memory structures"],
    correctAnswer: 1,
  },
  {
    question: "What does 'SOLID' represent in object-oriented design?",
    options: ["Secure Object-Linked Interface Design", "Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion", "Structured Object-Linked Interface Design", "Secure Object-Oriented Logical Interface Design"],
    correctAnswer: 1,
  },
  {
    question: "What is 'reactive programming' primarily about?",
    options: ["Creating active user interfaces", "Programming with asynchronous data streams", "Network protocol design", "Database management"],
    correctAnswer: 1,
  },
  {
    question: "What does 'JWT' stand for in web authentication?",
    options: ["Java Web Token", "JavaScript Web Transfer", "JSON Web Token", "Java Web Transfer"],
    correctAnswer: 2,
  },
  {
    question: "What is the primary purpose of 'GraphQL'?",
    options: ["Graph database management", "Flexible API query language", "Web page styling", "Network routing"],
    correctAnswer: 1,
  },
  {
    question: "What is 'serverless computing'?",
    options: ["Computing without physical servers", "Cloud computing model where cloud provider manages infrastructure", "A programming language", "A network protocol"],
    correctAnswer: 1,
  },
  {
    question: "What does 'CI/CD' stand for in software development?",
    options: ["Continuous Integration/Continuous Deployment", "Code Improvement/Code Design", "Computer Interface/Computer Development", "Critical Information/Critical Design"],
    correctAnswer: 0,
  },
  {
    question: "What is 'machine learning' primarily used for?",
    options: ["Creating physical machines", "Enabling computers to learn from data", "Network security", "Web design"],
    correctAnswer: 1,
  },
  {
    question: "What does 'ORM' stand for in database programming?",
    options: ["Object Relational Mapping", "Operational Resource Management", "Object Rendering Method", "Operational Relationship Model"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary use of 'Apache Kafka'?",
    options: ["Web hosting", "Distributed streaming platform", "Database management", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What is 'edge computing'?",
    options: ["Computing at the edge of a network", "A type of web design", "A programming language", "A database technique"],
    correctAnswer: 0,
  },
  {
    question: "What does 'MLOps' stand for?",
    options: ["Machine Learning Operations", "Mobile Learning Optimization", "Managed Learning Orchestration", "Machine Linked Operations"],
    correctAnswer: 0,
  },
  {
    question: "What is 'quantum computing'?",
    options: ["A type of classical computing", "Computing using quantum-mechanical phenomena", "A programming language", "A network protocol"],
    correctAnswer: 1,
  },
  {
    question: "What does 'BERT' stand for in natural language processing?",
    options: ["Basic Encoding Representation Transformer", "Bidirectional Encoder Representations from Transformers", "Basic Encoder Recursive Technique", "Bidirectional Encoding Recursive Transformer"],
    correctAnswer: 1,
  },
  {
    question: "What is 'explainable AI'?",
    options: ["AI that can be easily understood", "A method to make AI decision-making processes transparent", "A programming language", "A network protocol"],
    correctAnswer: 1,
  },
  {
    question: "What does 'GANs' stand for in machine learning?",
    options: ["Generative Adversarial Networks", "Global Artificial Neuron Systems", "Generative Algorithmic Networks", "Global Artificial Network Systems"],
    correctAnswer: 0,
  },
  {
    question: "What is 'zero-knowledge proof'?",
    options: ["A security technique", "A cryptographic method to prove knowledge without revealing information", "A programming language", "A network protocol"],
    correctAnswer: 1,
  },
  {
    question: "What does 'MQTT' stand for?",
    options: ["Message Queuing Telemetry Transport", "Managed Query Transmission Tool", "Mobile Queuing Transfer Technology", "Messaging Queue Transfer Technique"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'Kubernetes'?",
    options: ["Web design", "Container orchestration", "Database management", "Network security"],
    correctAnswer: 1,
  },
  {
    question: "What does 'YAGNI' stand for in software development?",
    options: ["Yet Another Great Network Interface", "You Aren't Gonna Need It", "Young Agile Networking Implementation", "Yearly Agile Governance Network Interface"],
    correctAnswer: 1,
  },
  {
    question: "What is 'federated learning'?",
    options: ["A learning method for networks", "Machine learning technique that trains algorithms across decentralized devices", "A network security protocol", "A web design technique"],
    correctAnswer: 1,
  },
  {
    question: "What does 'CQRS' stand for?",
    options: ["Command Query Responsibility Segregation", "Computational Query Routing System", "Continuous Query Response Strategy", "Command Queuing Routing System"],
    correctAnswer: 0,
  },
  {
    question: "What is 'differential privacy'?",
    options: ["A privacy technique", "A method to add noise to data to protect individual privacy", "A programming language", "A network protocol"],
    correctAnswer: 1,
  },
  {
    question: "What does 'KISS' stand for in software design?",
    options: ["Keep It Simple, Stupid", "Key Interface Secure System", "Kernel Interface Secure Strategy", "Key Integrated Secure System"],
    correctAnswer: 0,
  },
  {
    question: "What does 'YOLO' stand for in computer vision?",
    options: ["You Only Look Once", "Yield Optimal Learning Optimization", "Young Optimal Learning Output", "Yearly Optimal Learning Objective"],
    correctAnswer: 0,
  },
  {
    question: "What is 'transfer learning' in machine learning?",
    options: ["Transferring data between systems", "Reusing a pre-trained model for a different but related problem", "A network protocol", "A web design technique"],
    correctAnswer: 1,
  },
  {
    question: "What does 'LIDAR' stand for?",
    options: ["Light Detection and Ranging", "Laser Imaging Detection and Ranging", "Laser Integrated Detection and Ranging", "Light Integrated Detection and Ranging"],
    correctAnswer: 0,
  },
  {
    question: "What does 'CRUD' stand for in database operations?",
    options: ["Create, Read, Update, Delete", "Computational Recursive Unified Design", "Continuous Robust Unified Development", "Computational Recursive Unified Development"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of 'Apache Hadoop'?",
    options: ["Web hosting", "Distributed storage and processing of big data", "Network security", "Database design"],
    correctAnswer: 1,
  },
  {
    question: "What is 'immutable infrastructure'?",
    options: ["Infrastructure that cannot be changed", "Infrastructure that is replaced entirely when changes are needed", "A network security concept", "A database design technique"],
    correctAnswer: 1,
  },
  {
    question: "What does 'CAP' theorem stand for?",
    options: ["Consistency, Availability, Partition tolerance", "Computational Algorithmic Processing", "Continuous Automated Programming", "Computational Automated Processing"],
    correctAnswer: 0,
  },
  {
    question: "What is 'chaos engineering'?",
    options: ["A method of breaking computer systems", "Deliberately testing system resilience by introducing failures", "A network security protocol", "A web design technique"],
    correctAnswer: 1,
  },
  {
    question: "What does 'SAML' stand for?",
    options: ["Secure Authentication Markup Language", "Security Assertion Markup Language", "Simple Authentication Management Language", "Secure Access Management Layer"],
    correctAnswer: 1,
  },
  {
    question: "What is 'event sourcing'?",
    options: ["A method of storing events", "Storing the state of data by sequence of events", "A network communication protocol", "A web development technique"],
    correctAnswer: 1,
  },
  {
    question: "What does 'TOTP' stand for?",
    options: ["Time-based One-Time Password", "Temporary Operational Transfer Protocol", "Total Operational Transfer Process", "Timed Operational Transfer Protocol"],
    correctAnswer: 0,
  },
  {
    question: "What is 'canary deployment'?",
    options: ["A type of bird-themed software", "A deployment strategy to reduce risk by gradually rolling out changes", "A network security method", "A database optimization technique"],
    correctAnswer: 1,
  },
  {
    question: "What does 'RBAC' stand for?",
    options: ["Role-Based Access Control", "Robust Business Authentication Control", "Reliable Business Access Control", "Robust Business Automated Control"],
    correctAnswer: 0,
  },
  {
    question: "What is 'eventual consistency'?",
    options: ["A temporary database state", "A model where data will become consistent over time", "A network security protocol", "A web development approach"],
    correctAnswer: 1,
  },

        {
          question: "What is the output of `console.log(typeof null)` in JavaScript?",
          options: ["null", "undefined", "object", "string"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following is NOT a JavaScript framework?",
          options: ["React", "Angular", "Vue", "Django"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `git clone` command?",
          options: ["Create a new branch", "Copy a repository to your local machine", "Delete a repository", "Merge two branches"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is a NoSQL database?",
          options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
          correctAnswer: 2,
        },
        {
          question: "What does the `this` keyword refer to in JavaScript?",
          options: ["The current function", "The global object", "The object that owns the executing code", "The parent object"],
          correctAnswer: 2,
        },
        {
          question: "Which programming language is known for its use in machine learning?",
          options: ["Java", "Python", "C++", "Ruby"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the `npm` command in Node.js?",
          options: ["Node Package Manager", "Network Performance Monitor", "New Project Manager", "Node Process Manager"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a version control system?",
          options: ["Git", "SVN", "Mercurial", "Maven"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `async/await` syntax in JavaScript?",
          options: ["To create loops", "To handle asynchronous operations", "To define classes", "To create variables"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is a front-end framework?",
          options: ["Django", "Flask", "React", "Express"],
          correctAnswer: 2,
        },
        {
          question: "What is the purpose of the `try-catch` block in programming?",
          options: ["To create a new function", "To handle potential errors", "To define a loop", "To declare variables"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is a relational database?",
          options: ["MongoDB", "Cassandra", "MySQL", "Redis"],
          correctAnswer: 2,
        },
        {
          question: "What is the purpose of the `map()` function in JavaScript?",
          options: ["To filter elements", "To sort elements", "To transform elements", "To delete elements"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following is NOT a programming paradigm?",
          options: ["Object-Oriented", "Functional", "Procedural", "Numerical"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `finally` block in Java?",
          options: ["To handle exceptions", "To execute code after try-catch", "To define a loop", "To create a variable"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is NOT a JavaScript data type?",
          options: ["String", "Boolean", "Integer", "Undefined"],
          correctAnswer: 2,
        },
        {
          question: "What is the purpose of the `break` statement in a loop?",
          options: ["To skip the current iteration", "To exit the loop entirely", "To restart the loop", "To pause the loop"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is NOT a Python framework?",
          options: ["Django", "Flask", "Spring", "FastAPI"],
          correctAnswer: 2,
        },
        {
          question: "What is the purpose of the `super()` function in Python?",
          options: ["To call a parent class method", "To create a new object", "To define a subclass", "To delete an object"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid CSS unit?",
          options: ["px", "em", "rem", "dm"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `reduce()` function in JavaScript?",
          options: ["To filter elements", "To transform elements", "To accumulate values", "To sort elements"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following is NOT a valid HTML tag?",
          options: ["<div>", "<span>", "<container>", "<p>"],
          correctAnswer: 2,
        },
        {
          question: "What is the purpose of the `localStorage` object in JavaScript?",
          options: ["To store data temporarily", "To store data permanently", "To delete data", "To encrypt data"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is NOT a valid Python data structure?",
          options: ["List", "Tuple", "Set", "Array"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `z-index` property in CSS?",
          options: ["To control the order of overlapping elements", "To set the font size", "To define the width of an element", "To add a shadow effect"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid JavaScript loop?",
          options: ["for", "while", "do-while", "foreach"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `__init__` method in Python?",
          options: ["To initialize an object", "To delete an object", "To define a class", "To create a function"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid SQL command?",
          options: ["SELECT", "INSERT", "DELETE", "PRINT"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `fetch()` function in JavaScript?",
          options: ["To make HTTP requests", "To filter data", "To sort data", "To delete data"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid Python operator?",
          options: ["+", "-", "*", "//", "%%"],
          correctAnswer: 4,
        },
        {
          question: "What is the purpose of the `box-shadow` property in CSS?",
          options: ["To add a shadow effect to an element", "To set the border color", "To define the width of an element", "To control the order of overlapping elements"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid JavaScript event?",
          options: ["onclick", "onload", "onchange", "onprint"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `__str__` method in Python?",
          options: ["To return a string representation of an object", "To delete an object", "To define a class", "To create a function"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid CSS selector?",
          options: [".class", "#id", "element", "::pseudo"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `Promise` object in JavaScript?",
          options: ["To handle asynchronous operations", "To create loops", "To define classes", "To create variables"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid Python keyword?",
          options: ["if", "else", "switch", "while"],
          correctAnswer: 2,
        },
        {
          question: "What is the purpose of the `flexbox` layout in CSS?",
          options: ["To create flexible layouts", "To add animations", "To define the width of an element", "To control the order of overlapping elements"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid JavaScript array method?",
          options: ["push()", "pop()", "shift()", "delete()"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `__name__` variable in Python?",
          options: ["To get the name of the current module", "To delete an object", "To define a class", "To create a function"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid CSS property?",
          options: ["color", "font-size", "margin", "text-align", "border-radius", "shadow"],
          correctAnswer: 5,
        },
        {
          question: "What is the purpose of the `event.preventDefault()` method in JavaScript?",
          options: ["To prevent the default behavior of an event", "To trigger an event", "To delete an event", "To create an event"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid Python built-in function?",
          options: ["print()", "len()", "type()", "delete()"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `grid` layout in CSS?",
          options: ["To create grid-based layouts", "To add animations", "To define the width of an element", "To control the order of overlapping elements"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid JavaScript string method?",
          options: ["toUpperCase()", "toLowerCase()", "trim()", "delete()"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `__init__.py` file in Python?",
          options: ["To mark a directory as a Python package", "To delete an object", "To define a class", "To create a function"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid CSS pseudo-class?",
          options: [":hover", ":active", ":focus", ":print"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `event.stopPropagation()` method in JavaScript?",
          options: ["To stop the event from bubbling up the DOM tree", "To trigger an event", "To delete an event", "To create an event"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid Python module?",
          options: ["math", "random", "datetime", "print"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `transition` property in CSS?",
          options: ["To create animations", "To add a shadow effect", "To define the width of an element", "To control the order of overlapping elements"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid JavaScript object method?",
          options: ["keys()", "values()", "entries()", "delete()"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `__main__` block in Python?",
          options: ["To define the entry point of a script", "To delete an object", "To define a class", "To create a function"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid CSS media query?",
          options: ["@media screen", "@media print", "@media speech", "@media animation"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `event.target` property in JavaScript?",
          options: ["To get the element that triggered the event", "To trigger an event", "To delete an event", "To create an event"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid Python exception?",
          options: ["ValueError", "TypeError", "IndexError", "PrintError"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `animation` property in CSS?",
          options: ["To create animations", "To add a shadow effect", "To define the width of an element", "To control the order of overlapping elements"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid JavaScript number method?",
          options: ["toFixed()", "toPrecision()", "toString()", "delete()"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `__doc__` attribute in Python?",
          options: ["To store the docstring of a module, class, or function", "To delete an object", "To define a class", "To create a function"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid CSS function?",
          options: ["rgb()", "rgba()", "hsl()", "print()"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `event.currentTarget` property in JavaScript?",
          options: ["To get the element to which the event handler is attached", "To trigger an event", "To delete an event", "To create an event"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid Python built-in module?",
          options: ["os", "sys", "math", "print"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `transform` property in CSS?",
          options: ["To apply 2D or 3D transformations to an element", "To add a shadow effect", "To define the width of an element", "To control the order of overlapping elements"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid JavaScript date method?",
          options: ["getDate()", "getMonth()", "getYear()", "delete()"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `__file__` attribute in Python?",
          options: ["To get the path of the current module", "To delete an object", "To define a class", "To create a function"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid CSS pseudo-element?",
          options: ["::before", "::after", "::first-letter", "::print"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `event.type` property in JavaScript?",
          options: ["To get the type of the event", "To trigger an event", "To delete an event", "To create an event"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid Python built-in exception?",
          options: ["ValueError", "TypeError", "IndexError", "PrintError"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `filter` property in CSS?",
          options: ["To apply visual effects to an element", "To add a shadow effect", "To define the width of an element", "To control the order of overlapping elements"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid JavaScript array method?",
          options: ["push()", "pop()", "shift()", "delete()"],
          correctAnswer: 3,
        },
        {
          question: "What is the purpose of the `__package__` attribute in Python?",
          options: ["To get the name of the package containing the current module", "To delete an object", "To define a class", "To create a function"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a valid CSS property?",
          options: ["color", "font-size", "margin", "text-align", "border-radius", "shadow"],
          correctAnswer: 5,
        },
      ],
  },
  {
    category: "geography",
    questions: [
      {
        question: "Which is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3,
      },
      {
        question: "Which country has the largest population in the world?",
        options: ["India", "China", "United States", "Indonesia"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known for the Great Barrier Reef?",
        options: ["Australia", "United States", "South Africa", "New Zealand"],
        correctAnswer: 0,
      },
      {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
        correctAnswer: 2,
      },
      {
        question: "Which is the tallest mountain in the world?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        correctAnswer: 2,
      },
      {
        question: "What is the capital of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        correctAnswer: 0,
      },
      {
        question: "Which desert is the largest hot desert in the world?",
        options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
        correctAnswer: 2,
      },
      {
        question: "Which country is known as the Land of the Midnight Sun?",
        options: ["Sweden", "Finland", "Norway", "Denmark"],
        correctAnswer: 2,
      },
      {
        question: "What is the longest mountain range in the world?",
        options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
        correctAnswer: 2,
      },
      {
        question: "Which river flows through Egypt?",
        options: ["Amazon River", "Yangtze River", "Nile River", "Ganges River"],
        correctAnswer: 2,
      },
      {
        question: "Which is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correctAnswer: 0,
      },
      {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the most time zones?",
        options: ["United States", "Russia", "Canada", "Australia"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known for the Eiffel Tower?",
        options: ["Germany", "Italy", "Spain", "France"],
        correctAnswer: 3,
      },
      {
        question: "Which is the most populous city in the world?",
        options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
        correctAnswer: 0,
      },
      {
        question: "Which mountain range is located in South America?",
        options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
        correctAnswer: 3,
      },
      {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Africa", "South America", "Europe"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of Brazil?",
        options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
        correctAnswer: 2,
      },
      {
        question: "What is the official language of Brazil?",
        options: ["Spanish", "English", "Portuguese", "French"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the most volcanoes?",
        options: ["Japan", "Indonesia", "United States", "Italy"],
        correctAnswer: 1,
      },
      {
        question: "Which city is known as the Big Apple?",
        options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
        correctAnswer: 1,
      },
      {
        question: "Which ocean is located to the east of Africa?",
        options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
        correctAnswer: 3,
      },
      {
        question: "Which is the second largest continent by area?",
        options: ["Asia", "Africa", "North America", "Europe"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of Argentina?",
        options: ["Rio de Janeiro", "Buenos Aires", "Santiago", "Lima"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known as the 'Land of Fire and Ice'?",
        options: ["Greenland", "Norway", "Iceland", "Finland"],
        correctAnswer: 2,
      },
      {
        question: "What is the smallest country in South America?",
        options: ["Uruguay", "Suriname", "Guyana", "Ecuador"],
        correctAnswer: 1,
      },
      {
        question: "Which river is the longest in Africa?",
        options: ["Congo River", "Niger River", "Nile River", "Zambezi River"],
        correctAnswer: 2,
      },
      {
        question: "What is the highest waterfall in the world?",
        options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
        correctAnswer: 2,
      },
      {
        question: "Which country is home to the Great Barrier Reef?",
        options: ["Indonesia", "Philippines", "Australia", "Brazil"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest desert in the world?",
        options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Antarctic Desert"],
        correctAnswer: 1,
      },
      {
        question: "Which mountain range runs through seven countries in South America?",
        options: ["Rocky Mountains", "Andes", "Alps", "Himalayas"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of Kazakhstan?",
        options: ["Almaty", "Nur-Sultan", "Bishkek", "Tashkent"],
        correctAnswer: 1,
      },
      {
        question: "Which country has the most islands in the world?",
        options: ["Indonesia", "Philippines", "Sweden", "Greece"],
        correctAnswer: 0,
      },
      {
        question: "What is the largest lake in Africa?",
        options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
        correctAnswer: 0,
      },
      {
        question: "Which country is known as the 'Land of a Thousand Lakes'?",
        options: ["Canada", "Russia", "Finland", "Sweden"],
        correctAnswer: 2,
      },
      {
        question: "What is the lowest point on Earth?",
        options: ["Dead Sea", "Death Valley", "Mariana Trench", "Dead Sea Depression"],
        correctAnswer: 0,
      },
      {
        question: "Which country is the largest by land area?",
        options: ["China", "United States", "Canada", "Russia"],
        correctAnswer: 3,
      },
      {
        question: "What is the capital of Mongolia?",
        options: ["Ulaanbaatar", "Astana", "Bishkek", "Almaty"],
        correctAnswer: 0,
      },
      {
        question: "Which strait separates Asia from North America?",
        options: ["Strait of Gibraltar", "Bering Strait", "Strait of Hormuz", "Strait of Malacca"],
        correctAnswer: 1,
      },
      {
        question: "What is the largest island in the Caribbean?",
        options: ["Cuba", "Hispaniola", "Jamaica", "Puerto Rico"],
        correctAnswer: 0,
      },
      {
        question: "Which country is known as the 'Roof of the World'?",
        options: ["Nepal", "Tibet", "Bhutan", "Mongolia"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of Uzbekistan?",
        options: ["Tashkent", "Samarkand", "Bishkek", "Ashgabat"],
        correctAnswer: 0,
      },
      {
        question: "Which river flows through the Grand Canyon?",
        options: ["Mississippi River", "Colorado River", "Rio Grande", "Columbia River"],
        correctAnswer: 1,
      },
      {
        question: "What is the largest archipelagic state in the world?",
        options: ["Philippines", "Indonesia", "Japan", "Greece"],
        correctAnswer: 1,
      },
      {
        question: "Which country is home to the ancient city of Petra?",
        options: ["Egypt", "Syria", "Jordan", "Lebanon"],
        correctAnswer: 2,
      },
      {
        question: "What is the capital of Turkmenistan?",
        options: ["Ashgabat", "Tashkent", "Bishkek", "Almaty"],
        correctAnswer: 0,
      },
      {
        question: "Which mountain is the highest peak in North America?",
        options: ["Mount McKinley", "Mount Logan", "Mount Rainier", "Mount Whitney"],
        correctAnswer: 1,
      },
      {
        question: "What is the largest bay in the world?",
        options: ["Hudson Bay", "Bay of Bengal", "Gulf of Mexico", "Chesapeake Bay"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known as the 'Pearl of the Indian Ocean'?",
        options: ["Maldives", "Sri Lanka", "Mauritius", "Seychelles"],
        correctAnswer: 2,
      },
      {
        question: "What is the longest river in South America?",
        options: ["Amazon River", "Orinoco River", "Paraná River", "São Francisco River"],
        correctAnswer: 0,
      },
      {
        question: "Which country has the most UNESCO World Heritage Sites?",
        options: ["Italy", "China", "Spain", "France"],
        correctAnswer: 0,
      },
      {
        question: "What is the deepest point in the world's oceans?",
        options: ["Mariana Trench", "Puerto Rico Trench", "Tonga Trench", "Java Trench"],
        correctAnswer: 0,
      },
      {
        question: "Which African country is known as the 'Rainbow Nation'?",
        options: ["Kenya", "Nigeria", "South Africa", "Ethiopia"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest lake in North America?",
        options: ["Great Bear Lake", "Great Slave Lake", "Lake Superior", "Lake Michigan"],
        correctAnswer: 2,
      },
      {
        question: "Which country is home to the world's largest tropical rainforest?",
        options: ["Indonesia", "Congo", "Brazil", "Peru"],
        correctAnswer: 2,
      },
      {
        question: "What is the capital of Azerbaijan?",
        options: ["Baku", "Tbilisi", "Yerevan", "Ashgabat"],
        correctAnswer: 0,
      },
      {
        question: "Which mountain range separates Europe from Asia?",
        options: ["Ural Mountains", "Caucasus Mountains", "Altai Mountains", "Carpathian Mountains"],
        correctAnswer: 0,
      },
      {
        question: "What is the smallest independent country in the Western Hemisphere?",
        options: ["Saint Kitts and Nevis", "Grenada", "Antigua and Barbuda", "Saint Vincent and the Grenadines"],
        correctAnswer: 0,
      },
      {
        question: "Which country is known as the 'Land of the Long White Cloud'?",
        options: ["Australia", "New Zealand", "Fiji", "Solomon Islands"],
        correctAnswer: 1,
      },
      {
        question: "What is the largest salt flat in the world?",
        options: ["Bonneville Salt Flats", "Salar de Uyuni", "Makgadikgadi Pan", "Great Salt Lake"],
        correctAnswer: 1,
      },
      {
        question: "Which country has the most time zones?",
        options: ["Russia", "United States", "France", "Canada"],
        correctAnswer: 0,
      },
      {
        question: "What is the highest active volcano in the world?",
        options: ["Mount Etna", "Mount Vesuvius", "Ojos del Salado", "Mauna Loa"],
        correctAnswer: 2,
      },
      {
        question: "Which river passes through the most countries?",
        options: ["Danube River", "Nile River", "Amazon River", "Congo River"],
        correctAnswer: 0,
      },
      {
        question: "What is the largest island in the Mediterranean Sea?",
        options: ["Sardinia", "Sicily", "Cyprus", "Crete"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known as the 'Land of the Incas'?",
        options: ["Bolivia", "Ecuador", "Peru", "Colombia"],
        correctAnswer: 2,
      },
      {
        question: "What is the capital of Kyrgyzstan?",
        options: ["Bishkek", "Almaty", "Tashkent", "Ashgabat"],
        correctAnswer: 0,
      },
      {
        question: "Which desert covers most of Northern Africa?",
        options: ["Kalahari Desert", "Arabian Desert", "Gobi Desert", "Sahara Desert"],
        correctAnswer: 3,
      },
      {
        question: "What is the largest coral reef system in the world?",
        options: ["Red Sea Coral Reef", "New Caledonia Barrier Reef", "Great Barrier Reef", "Mesoamerican Barrier Reef"],
        correctAnswer: 2,
      },
      {
        question: "Which country is known as the 'Land of the Midnight Sun'?",
        options: ["Finland", "Sweden", "Norway", "Iceland"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest lake in South America?",
        options: ["Lake Titicaca", "Mar del Plata", "Lake Maracaibo", "Lake Buenos Aires"],
        correctAnswer: 0,
      },
      {
        question: "Which country has the most volcanoes?",
        options: ["Japan", "Indonesia", "United States", "Chile"],
        correctAnswer: 1,
      },
      {
        question: "What is the longest mountain range in the world?",
        options: ["Andes", "Himalayas", "Rocky Mountains", "Great Dividing Range"],
        correctAnswer: 0,
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["South Korea", "China", "Japan", "Taiwan"],
        correctAnswer: 2,
      },  
      {
        question: "Which country is home to the world's largest salt mine?",
        options: ["Poland", "Chile", "Canada", "Russia"],
        correctAnswer: 0,
      },
      {
        question: "What is the smallest independent state in Southeast Asia?",
        options: ["Singapore", "Brunei", "East Timor", "Maldives"],
        correctAnswer: 1,
      },
      {
        question: "Which river delta is considered the most populous in the world?",
        options: ["Nile Delta", "Ganges Delta", "Mississippi Delta", "Mekong Delta"],
        correctAnswer: 1,
      },
      {
        question: "What is the most sparsely populated country in the world?",
        options: ["Greenland", "Mongolia", "Iceland", "Namibia"],
        correctAnswer: 0,
      },
      {
        question: "Which country has the most natural lakes?",
        options: ["United States", "Canada", "Russia", "Finland"],
        correctAnswer: 1,
      },
      {
        question: "What is the oldest continuously inhabited city in the world?",
        options: ["Damascus", "Jericho", "Aleppo", "Byblos"],
        correctAnswer: 1,
      },
      {
        question: "Which country has the most UNESCO Biosphere Reserves?",
        options: ["Mexico", "Spain", "United States", "Russia"],
        correctAnswer: 0,
      },
      {
        question: "What is the world's largest landlocked country?",
        options: ["Kazakhstan", "Mongolia", "Chad", "Bolivia"],
        correctAnswer: 0,
      },
      {
        question: "Which country has the most earthquakes annually?",
        options: ["Japan", "Indonesia", "China", "Philippines"],
        correctAnswer: 1,
      },
      {
        question: "What is the driest place on Earth?",
        options: ["Atacama Desert", "Sahara Desert", "Antarctic Desert", "Gobi Desert"],
        correctAnswer: 0,
      },
      {
        question: "Which country has the most active volcanoes?",
        options: ["Indonesia", "United States", "Japan", "Philippines"],
        correctAnswer: 0,
      },
      {
        question: "What is the world's largest mangrove forest located?",
        options: ["Brazil", "Indonesia", "India", "Bangladesh"],
        correctAnswer: 3,
      },
      {
        question: "Which country has the most border countries?",
        options: ["Russia", "China", "Brazil", "India"],
        correctAnswer: 0,
      },
      {
        question: "What is the most linguistically diverse country?",
        options: ["Papua New Guinea", "Indonesia", "India", "Nigeria"],
        correctAnswer: 0,
      },
      {
        question: "Which country has the most endemic species?",
        options: ["Brazil", "Indonesia", "Colombia", "Madagascar"],
        correctAnswer: 3,
      },
      {
        question: "What is the world's largest river island?",
        options: ["Majuli", "Ilha do Bananal", "Marajo Island", "Chilika Island"],
        correctAnswer: 0,
      },
      {
        question: "Which country has the most pyramids?",
        options: ["Egypt", "Sudan", "Mexico", "Peru"],
        correctAnswer: 1,
      },
      {
        question: "What is the world's oldest national park?",
        options: ["Yellowstone", "Banff", "Kruger", "Komodo"],
        correctAnswer: 0,
      },
      {
        question: "Which country has the most geysers?",
        options: ["Iceland", "New Zealand", "United States", "Chile"],
        correctAnswer: 2,
      },
      {
        question: "What is the world's largest coral atoll?",
        options: ["Kwajalein Atoll", "Kiritimati", "Tokelau", "Maldives Atoll"],
        correctAnswer: 0,
      },
      {
        question: "Which country has the most meteorite impact craters?",
        options: ["Canada", "United States", "Russia", "Australia"],
        correctAnswer: 3,
      },
      {
        question: "What is the world's largest underground lake?",
        options: ["Son Doong Cave", "Dragon's Breath Cave", "Lake Vostok", "Mammoth Cave System"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the most fjords?",
        options: ["Norway", "New Zealand", "Chile", "Canada"],
        correctAnswer: 0,
      },
      {
        question: "What is the world's largest hot desert?",
        options: ["Arabian Desert", "Gobi Desert", "Sahara Desert", "Kalahari Desert"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the most national parks?",
        options: ["United States", "Canada", "Brazil", "Australia"],
        correctAnswer: 0,
      },  
    ],
  },
  {
    category: "mathematics",
    questions: [
      {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
      },
      {
        question: "What is 15 × 13?",
        options: ["180", "185", "195", "200"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 8³?",
        options: ["512", "216", "256", "128"],
        correctAnswer: 0,
      },
      {
        question: "What is 48 ÷ 6?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 3 + 5 × 4?",
        options: ["20", "22", "24", "23"],
        correctAnswer: 3,
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["180°", "360°", "90°", "270°"],
        correctAnswer: 0,
      },
      {
        question: "What is the perimeter of a square with a side length of 4 cm?",
        options: ["12 cm", "16 cm", "20 cm", "24 cm"],
        correctAnswer: 1,
      },
      {
        question: "What is 11²?",
        options: ["121", "131", "141", "111"],
        correctAnswer: 3,
      },
      {
        question: "What is 9 × 12?",
        options: ["105", "110", "108", "120"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 16 ÷ 4?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
      },
      {
        question: "What is 25% of 200?",
        options: ["30", "40", "50", "60"],
        correctAnswer: 2,
      },
      {
        question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
        options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 ÷ 2 + 3?",
        options: ["8", "7", "9", "6"],
        correctAnswer: 1,
      },
      {
        question: "What is 3 × 7 + 2?",
        options: ["20", "21", "22", "23"],
        correctAnswer: 1,
      },
      {
        question: "What is the greatest common divisor (GCD) of 24 and 36?",
        options: ["4", "6", "8", "12"],
        correctAnswer: 3,
      },
      {
        question: "What is the least common multiple (LCM) of 6 and 8?",
        options: ["24", "32", "48", "56"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 2³ × 3?",
        options: ["12", "15", "18", "24"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 × (5 + 3)?",
        options: ["80", "70", "60", "50"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 14 × 14?",
        options: ["186", "196", "206", "216"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the first 10 positive integers?",
        options: ["50", "55", "60", "65"],
        correctAnswer: 1,
      },
      {
        question: "What is 12 × 15?",
        options: ["150", "160", "170", "180"],
        correctAnswer: 3,
      },
      {
        question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
        options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of (8 + 2) × 3?",
        options: ["30", "32", "34", "28"],
        correctAnswer: 3,
      },
      {
        question: "What is the value of 50% of 80?",
        options: ["30", "35", "40", "45"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 25 ÷ 5 × 3?",
        options: ["12", "15", "18", "20"],
        correctAnswer: 1,
      },
      {
        question: "What is the result of 17 × 6?",
        options: ["102", "96", "108", "112"],
        correctAnswer: 1,
      },
      {
        question: "What is the area of a triangle with base 8 cm and height 5 cm?",
        options: ["20 cm²", "30 cm²", "40 cm²", "25 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is 7³?",
        options: ["343", "294", "392", "441"],
        correctAnswer: 0,
      },
      {
        question: "What is 45% of 200?",
        options: ["80", "90", "100", "110"],
        correctAnswer: 1,
      },
      {
        question: "What is the perimeter of a rectangle 6 cm long and 4 cm wide?",
        options: ["16 cm", "20 cm", "24 cm", "28 cm"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 64 ÷ 8?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
      },
      {
        question: "What is the sum of the first 5 positive integers?",
        options: ["10", "15", "20", "25"],
        correctAnswer: 1,
      },
      {
        question: "What is 13²?",
        options: ["156", "169", "182", "195"],
        correctAnswer: 1,
      },
      {
        question: "What is the circumference of a circle with radius 3 cm? (Use π = 3.14)",
        options: ["18.84 cm", "28.26 cm", "37.68 cm", "47.10 cm"],
        correctAnswer: 0,
      },
      {
        question: "What is 25% of 160?",
        options: ["30", "40", "50", "60"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 5 × (3 + 2)?",
        options: ["10", "15", "20", "25"],
        correctAnswer: 1,
      },
      {
        question: "What is the greatest common divisor of 24 and 36?",
        options: ["6", "8", "12", "18"],
        correctAnswer: 0,
      },
      {
        question: "What is the least common multiple of 4 and 6?",
        options: ["12", "18", "24", "36"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 2⁴?",
        options: ["8", "12", "16", "24"],
        correctAnswer: 0,
      },
      {
        question: "What is the area of a square with side 7 cm?",
        options: ["28 cm²", "35 cm²", "49 cm²", "56 cm²"],
        correctAnswer: 2,
      },
      {
        question: "What is 75% of 80?",
        options: ["50", "55", "60", "65"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 18 ÷ 3 + 5?",
        options: ["6", "11", "16", "21"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: 1,
      },
      {
        question: "What is 9 × 11?",
        options: ["88", "90", "99", "108"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of (6 + 4) × 3?",
        options: ["30", "36", "42", "48"],
        correctAnswer: 0,
      },
      {
        question: "What is the volume of a cube with side 4 cm?",
        options: ["32 cm³", "48 cm³", "64 cm³", "96 cm³"],
        correctAnswer: 2,
      },
      {
        question: "What is 50% of 120?",
        options: ["50", "60", "70", "80"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 15 ÷ 5 × 3?",
        options: ["6", "9", "12", "15"],
        correctAnswer: 2,
      },
      {
        question: "What is the median of the numbers 3, 7, 1, 9, 5?",
        options: ["3", "5", "7", "9"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of √64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
      },  
      {
        question: "What is the result of 19 × 4?",
        options: ["76", "84", "72", "68"],
        correctAnswer: 1,
      },
      {
        question: "What is the area of a parallelogram with base 6 cm and height 5 cm?",
        options: ["20 cm²", "30 cm²", "36 cm²", "25 cm²"],
        correctAnswer: 2,
      },
      {
        question: "What is 6⁴?",
        options: ["1296", "216", "324", "729"],
        correctAnswer: 0,
      },
      {
        question: "What is 35% of 180?",
        options: ["54", "63", "72", "81"],
        correctAnswer: 1,
      },
      {
        question: "What is the perimeter of a hexagon with side length 4 cm?",
        options: ["18 cm", "20 cm", "24 cm", "28 cm"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 81 ÷ 9?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 2,
      },
      {
        question: "What is the sum of the first 7 positive integers?",
        options: ["21", "25", "28", "35"],
        correctAnswer: 2,
      },
      {
        question: "What is 16²?",
        options: ["256", "264", "272", "280"],
        correctAnswer: 0,
      },
      {
        question: "What is the area of a circle with radius 4 cm? (Use π = 3.14)",
        options: ["50.24 cm²", "40.16 cm²", "62.80 cm²", "28.26 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is 40% of 125?",
        options: ["40", "45", "50", "55"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 7 × (4 + 2)?",
        options: ["42", "35", "48", "56"],
        correctAnswer: 0,
      },
      {
        question: "What is the greatest common divisor of 18 and 48?",
        options: ["6", "9", "12", "18"],
        correctAnswer: 0,
      },
      {
        question: "What is the least common multiple of 5 and 7?",
        options: ["25", "30", "35", "40"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 3⁵?",
        options: ["81", "243", "125", "27"],
        correctAnswer: 1,
      },
      {
        question: "What is the area of a rectangle with length 9 cm and width 5 cm?",
        options: ["35 cm²", "40 cm²", "45 cm²", "50 cm²"],
        correctAnswer: 2,
      },
      {
        question: "What is 60% of 90?",
        options: ["48", "54", "60", "66"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 27 ÷ 3 + 8?",
        options: ["17", "18", "19", "20"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the angles in a quadrilateral?",
        options: ["180°", "270°", "360°", "450°"],
        correctAnswer: 2,
      },
      {
        question: "What is 8 × 12?",
        options: ["86", "92", "96", "104"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of (8 + 5) × 2?",
        options: ["22", "26", "28", "30"],
        correctAnswer: 2,
      },
      {
        question: "What is the volume of a rectangular prism 3 cm long, 4 cm wide, and 5 cm high?",
        options: ["40 cm³", "50 cm³", "60 cm³", "70 cm³"],
        correctAnswer: 2,
      },
      {
        question: "What is 25% of 200?",
        options: ["40", "50", "60", "70"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 20 ÷ 4 × 3?",
        options: ["12", "15", "18", "21"],
        correctAnswer: 1,
      },
      {
        question: "What is the mode of the numbers 2, 4, 4, 6, 8, 4?",
        options: ["2", "4", "6", "8"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of √100?",
        options: ["8", "9", "10", "11"],
        correctAnswer: 2,
      },
      {
        question: "What is the result of 23 × 5?",
        options: ["110", "115", "120", "125"],
        correctAnswer: 1,
      },
      {
        question: "What is the area of a trapezoid with bases 6 cm and 10 cm, and height 4 cm?",
        options: ["32 cm²", "40 cm²", "48 cm²", "56 cm²"],
        correctAnswer: 1,
      },
      {
        question: "What is 5⁴?",
        options: ["625", "525", "425", "325"],
        correctAnswer: 0,
      },
      {
        question: "What is 55% of 220?",
        options: ["110", "121", "132", "143"],
        correctAnswer: 1,
      },
      {
        question: "What is the perimeter of a rhombus with side length 7 cm?",
        options: ["21 cm", "28 cm", "35 cm", "42 cm"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 96 ÷ 12?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
      },
      {
        question: "What is the sum of the first 6 positive integers?",
        options: ["15", "18", "21", "24"],
        correctAnswer: 1,
      },
      {
        question: "What is 17²?",
        options: ["289", "279", "299", "269"],
        correctAnswer: 0,
      },
      {
        question: "What is the area of a circle with radius 5 cm? (Use π = 3.14)",
        options: ["78.50 cm²", "68.50 cm²", "88.50 cm²", "58.50 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is 30% of 180?",
        options: ["45", "54", "63", "72"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 6 × (5 + 3)?",
        options: ["48", "42", "54", "36"],
        correctAnswer: 0,
      },
      {
        question: "What is the greatest common divisor of 30 and 45?",
        options: ["5", "10", "15", "20"],
        correctAnswer: 2,
      },
      {
        question: "What is the least common multiple of 8 and 12?",
        options: ["24", "36", "48", "60"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 4⁵?",
        options: ["256", "196", "216", "236"],
        correctAnswer: 0,
      },
      {
        question: "What is the area of a square with side 9 cm?",
        options: ["63 cm²", "72 cm²", "81 cm²", "90 cm²"],
        correctAnswer: 2,
      },
      {
        question: "What is 80% of 90?",
        options: ["60", "65", "70", "75"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 24 ÷ 4 + 7?",
        options: ["13", "14", "15", "16"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the angles in a pentagon?",
        options: ["360°", "450°", "540°", "630°"],
        correctAnswer: 2,
      },
      {
        question: "What is 7 × 13?",
        options: ["80", "91", "84", "98"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of (7 + 3) × 4?",
        options: ["40", "44", "48", "52"],
        correctAnswer: 0,
      },
      {
        question: "What is the volume of a cylinder with radius 3 cm and height 4 cm? (Use π = 3.14)",
        options: ["113.04 cm³", "123.04 cm³", "133.04 cm³", "143.04 cm³"],
        correctAnswer: 0,
      },
      {
        question: "What is 40% of 150?",
        options: ["50", "60", "70", "80"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 25 ÷ 5 × 4?",
        options: ["15", "20", "25", "30"],
        correctAnswer: 1,
      },
      {
        question: "What is the range of the numbers 2, 8, 5, 1, 9?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of √144?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
      },  
    ],
  },

  {
    category: "entertainment",
    questions: [
      {
        question: "Who won the Academy Award for Best Actor in 2022?",
        options: ["Leonardo DiCaprio", "Will Smith", "Joaquin Phoenix", "Matthew McConaughey"],
        correctAnswer: 1,
      },
      {
        question: "Which movie won the Academy Award for Best Picture in 2021?",
        options: ["Parasite", "1917", "The Shape of Water", "Nomadland"],
        correctAnswer: 3,
      },
      {
        question: "Who played the character of Jack Dawson in the movie Titanic?",
        options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
        correctAnswer: 0,
      },
      {
        question: "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
        options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
        correctAnswer: 1,
      },
      {
        question: "Who is known as the 'King of Pop'?",
        options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Presley"],
        correctAnswer: 0,
      },
      {
        question: "Which superhero is known for saying, 'I am Iron Man'?",
        options: ["Black Panther", "Captain America", "Thor", "Iron Man"],
        correctAnswer: 3,
      },
      {
        question: "Which movie franchise includes a character named Luke Skywalker?",
        options: ["Guardians of the Galaxy", "Star Wars", "The Matrix", "Star Trek"],
        correctAnswer: 1,
      },
      {
        question: "Who played the character of Hermione Granger in the Harry Potter film series?",
        options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the movie 'Inception'?",
        options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
        correctAnswer: 2,
      },
      {
        question: "Which artist released the album 'Lover' in 2019?",
        options: ["Billie Eilish", "Taylor Swift", "Ed Sheeran", "Ariana Grande"],
        correctAnswer: 1,
      },
      {
        question: "What was the first video game to feature Mario?",
        options: ["Mario Kart", "Super Mario Bros.", "Donkey Kong", "The Legend of Zelda"],
        correctAnswer: 2,
      },
      {
        question: "Which movie features the famous line, 'Here's looking at you, kid'?",
        options: ["Casablanca", "Citizen Kane", "The Godfather", "Gone with the Wind"],
        correctAnswer: 0,
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["France", "Germany", "Argentina", "Brazil"],
        correctAnswer: 0,
      },
      {
        question: "Who created the comic book character Spider-Man?",
        options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
        correctAnswer: 1,
      },
      {
        question: "In which movie did Heath Ledger portray the Joker?",
        options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
        correctAnswer: 0,
      },
      {
        question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
        options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
        correctAnswer: 2,
      },
      {
        question: "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
        options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
        correctAnswer: 2,
      },
      {
        question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
        options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
        correctAnswer: 2,
      },
      {
        question: "Which Disney animated film features the song 'A Whole New World'?",
        options: ["Cinderella", "Aladdin", "Beauty and the Beast", "The Little Mermaid"],
        correctAnswer: 1,
      },
      {
        question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
        options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
        correctAnswer: 3,
      },
      {
        question: "Who sang the hit song 'Shape of You'?",
        options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
        correctAnswer: 3,
      },
      {
        question: "Which film won the Academy Award for Best Picture in 2020?",
        options: ["The Irishman", "Once Upon a Time in Hollywood", "Parasite", "1917"],
        correctAnswer: 2,
      },
      {
        question: "What year did the movie 'The Matrix' release?",
        options: ["1997", "1998", "2000", "1999"],
        correctAnswer: 3,
      },
      {
        question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
        options: ["Mark Ruffalo", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
        correctAnswer: 2,
      },
      {
        question: "Which singer is known as the 'Queen of Pop'?",
        options: ["Mariah Carey", "Lady Gaga", "Whitney Houston", "Madonna"],
        correctAnswer: 3,
      },
      {
        question: "Who directed the movie 'Avatar'?",
        options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
        correctAnswer: 1,
      },
      {
        question: "Which band released the album 'The Dark Side of the Moon'?",
        options: ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones"],
        correctAnswer: 2,
      },
      {
        question: "Who won the Best Actress Oscar in 2023?",
        options: ["Cate Blanchett", "Michelle Yeoh", "Viola Davis", "Jennifer Lawrence"],
        correctAnswer: 1,
      },
      {
        question: "Which TV series features the character Walter White?",
        options: ["Better Call Saul", "The Wire", "Breaking Bad", "Ozark"],
        correctAnswer: 2,
      },
      {
        question: "Who is the lead actor in the Marvel movie 'Thor'?",
        options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        correctAnswer: 1,
      },
      {
        question: "Which animated film won Best Animated Feature in 2022?",
        options: ["Encanto", "Turning Red", "Luca", "Raya and the Last Dragon"],
        correctAnswer: 0,
      },
      {
        question: "Who wrote the 'Harry Potter' book series?",
        options: ["Stephen King", "J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin"],
        correctAnswer: 2,
      },
      {
        question: "Which musician is known as the 'Weekend'?",
        options: ["Drake", "The Weeknd", "Justin Bieber", "Post Malone"],
        correctAnswer: 1,
      },
      {
        question: "Who played Jack in the movie 'Titanic'?",
        options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Matt Damon"],
        correctAnswer: 1,
      },
      {
        question: "Which video game franchise features Mario?",
        options: ["Zelda", "Sonic", "Pokemon", "Super Mario"],
        correctAnswer: 3,
      },
      {
        question: "Who directed 'Pulp Fiction'?",
        options: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Christopher Nolan"],
        correctAnswer: 1,
      },
      {
        question: "Which band performed 'Bohemian Rhapsody'?",
        options: ["The Beatles", "Led Zeppelin", "Queen", "The Rolling Stones"],
        correctAnswer: 2,
      },
      {
        question: "Who played Tony Stark in Marvel movies?",
        options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        correctAnswer: 2,
      },
      {
        question: "Which TV show features dragons and White Walkers?",
        options: ["The Witcher", "House of the Dragon", "Game of Thrones", "Vikings"],
        correctAnswer: 2,
      },
      {
        question: "Who won the Grammy for Album of the Year in 2023?",
        options: ["Harry Styles", "Beyoncé", "Bad Bunny", "Adele"],
        correctAnswer: 1,
      },
      {
        question: "Which actor played James Bond in 'No Time to Die'?",
        options: ["Pierce Brosnan", "Daniel Craig", "Sean Connery", "Roger Moore"],
        correctAnswer: 1,
      },
      {
        question: "Who created the TV series 'Stranger Things'?",
        options: ["Ryan Murphy", "Shonda Rhimes", "The Duffer Brothers", "Vince Gilligan"],
        correctAnswer: 2,
      },
      {
        question: "Which pop star is known as the 'Material Girl'?",
        options: ["Lady Gaga", "Madonna", "Britney Spears", "Christina Aguilera"],
        correctAnswer: 1,
      },
      {
        question: "Who directed 'Inception'?",
        options: ["Christopher Nolan", "Martin Scorsese", "Quentin Tarantino", "Steven Spielberg"],
        correctAnswer: 0,
      },
      {
        question: "Which K-pop group released 'Dynamite'?",
        options: ["BLACKPINK", "EXO", "BTS", "TWICE"],
        correctAnswer: 2,
      },
      {
        question: "Who played Katniss Everdeen in 'The Hunger Games'?",
        options: ["Emma Stone", "Shailene Woodley", "Jennifer Lawrence", "Brie Larson"],
        correctAnswer: 2,
      },
      {
        question: "Which comedian hosts 'The Daily Show'?",
        options: ["Trevor Noah", "Jimmy Fallon", "Stephen Colbert", "Jimmy Kimmel"],
        correctAnswer: 0,
      },
      {
        question: "Who wrote 'The Witcher' book series?",
        options: ["George R.R. Martin", "J.R.R. Tolkien", "Andrzej Sapkowski", "Stephen King"],
        correctAnswer: 2,
      },
      {
        question: "Which actor played Edward in 'Twilight'?",
        options: ["Taylor Lautner", "Robert Pattinson", "Kellan Lutz", "Jackson Rathbone"],
        correctAnswer: 1,
      },
      {
        question: "Who is the lead singer of Coldplay?",
        options: ["Chris Martin", "Bono", "Dave Grohl", "Adam Levine"],
        correctAnswer: 0,
      },
      {
        question: "Which animated studio produced 'Toy Story'?",
        options: ["DreamWorks", "Disney", "Pixar", "Blue Sky Studios"],
        correctAnswer: 2,
      },
      {
        question: "Who played Sherlock Holmes in the BBC series?",
        options: ["Robert Downey Jr.", "Benedict Cumberbatch", "Jonny Lee Miller", "Ian McKellen"],
        correctAnswer: 1,
      },
      {
        question: "Which rapper released the album 'Certified Lover Boy'?",
        options: ["Travis Scott", "Drake", "Kanye West", "J. Cole"],
        correctAnswer: 1,
      },
      {
        question: "Who directed 'The Avengers'?",
        options: ["Joss Whedon", "Ryan Coogler", "Anthony Russo", "James Gunn"],
        correctAnswer: 0,
      },
      {
        question: "Which actress won an Oscar for 'La La Land'?",
        options: ["Emma Stone", "Natalie Portman", "Meryl Streep", "Scarlett Johansson"],
        correctAnswer: 0,
      },
      {
        question: "Who created the TV series 'Breaking Bad'?",
        options: ["Vince Gilligan", "David Chase", "Matthew Weiner", "Ryan Murphy"],
        correctAnswer: 0,
      },
      {
        question: "Which rock band performed 'Sweet Child O' Mine'?",
        options: ["Aerosmith", "Bon Jovi", "Guns N' Roses", "Metallica"],
        correctAnswer: 2,
      },
      {
        question: "Who played Captain America in Marvel movies?",
        options: ["Chris Hemsworth", "Chris Evans", "Robert Downey Jr.", "Mark Ruffalo"],
        correctAnswer: 1,
      },
      {
        question: "Which singer released the album 'Renaissance'?",
        options: ["Rihanna", "Taylor Swift", "Beyoncé", "Lady Gaga"],
        correctAnswer: 2,
      },
      {
        question: "Who directed 'Parasite'?",
        options: ["Bong Joon-ho", "Park Chan-wook", "Kim Ki-duk", "Lee Chang-dong"],
        correctAnswer: 0,
      },
      {
        question: "Which actor played Jack Sparrow?",
        options: ["Brad Pitt", "Johnny Depp", "Orlando Bloom", "Geoffrey Rush"],
        correctAnswer: 1,
      },
      {
        question: "Who is the lead singer of Imagine Dragons?",
        options: ["Dan Reynolds", "Tyler Joseph", "Brendon Urie", "Patrick Stump"],
        correctAnswer: 0,
      },
      {
        question: "Which TV series is based on 'The Last of Us' video game?",
        options: ["Fallout", "The Last of Us", "Resident Evil", "Halo"],
        correctAnswer: 1,
      },
      {
        question: "Who won Best Actor at the 2022 Oscars?",
        options: ["Will Smith", "Benedict Cumberbatch", "Andrew Garfield", "Denzel Washington"],
        correctAnswer: 0,
      },
      {
        question: "Which pop star is known as the 'Princess of Pop'?",
        options: ["Lady Gaga", "Katy Perry", "Britney Spears", "Taylor Swift"],
        correctAnswer: 2,
      },
      {
        question: "Who directed 'Dune'?",
        options: ["Christopher Nolan", "Denis Villeneuve", "Ridley Scott", "James Cameron"],
        correctAnswer: 1,
      },
      {
        question: "Which rapper is known as Slim Shady?",
        options: ["50 Cent", "Snoop Dogg", "Eminem", "Dr. Dre"],
        correctAnswer: 2,
      },
      {
        question: "Who played Eleven in 'Stranger Things'?",
        options: ["Millie Bobby Brown", "Winona Ryder", "Natalia Dyer", "Maya Hawke"],
        correctAnswer: 0,
      },
      {
        question: "Which band performed 'Stairway to Heaven'?",
        options: ["The Rolling Stones", "The Beatles", "Pink Floyd", "Led Zeppelin"],
        correctAnswer: 3,
      },
      {
        question: "Who is the creator of 'Rick and Morty'?",
        options: ["Seth MacFarlane", "Justin Roiland", "Dan Harmon", "Matt Groening"],
        correctAnswer: 1,
      },
      {
        question: "Which country has won the most FIFA World Cup titles?",
        options: ["Germany", "Argentina", "Brazil", "Italy"],
        correctAnswer: 2,
      },
      {
        question: "Who is considered the 'Greatest of All Time' in basketball?",
        options: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Magic Johnson"],
        correctAnswer: 1,
      },
      {
        question: "Which band performed the official FIFA World Cup song 'Waka Waka'?",
        options: ["Coldplay", "Shakira", "Black Eyed Peas", "U2"],
        correctAnswer: 1,
      },
      {
        question: "Who has won the most Grand Slam tennis titles in men's singles?",
        options: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Pete Sampras"],
        correctAnswer: 2,
      },
      {
        question: "Which actor played Muhammad Ali in the biographical film?",
        options: ["Denzel Washington", "Will Smith", "Jamie Foxx", "Don Cheadle"],
        correctAnswer: 1,
      },
      {
        question: "Who is the most decorated Olympic athlete of all time?",
        options: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Carl Lewis"],
        correctAnswer: 1,
      },
      {
        question: "Which video game franchise features the character Kratos?",
        options: ["God of War", "Assassin's Creed", "Halo", "Uncharted"],
        correctAnswer: 0,
      },
      {
        question: "Who won the NBA Championship in 2022?",
        options: ["Golden State Warriors", "Los Angeles Lakers", "Brooklyn Nets", "Milwaukee Bucks"],
        correctAnswer: 0,
      },
      {
        question: "Which K-pop group has the largest global fanbase?",
        options: ["BLACKPINK", "EXO", "BTS", "TWICE"],
        correctAnswer: 2,
      },
      {
        question: "Who is the highest-paid athlete in 2022?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "LeBron James", "Roger Federer"],
        correctAnswer: 2,
      },
      {
        question: "Which Formula 1 driver won the World Championship in 2022?",
        options: ["Lewis Hamilton", "Max Verstappen", "Charles Leclerc", "Sebastian Vettel"],
        correctAnswer: 1,
      },
      {
        question: "Who directed the documentary 'The Last Dance' about Michael Jordan?",
        options: ["ESPN Films", "Netflix", "HBO", "Amazon Prime"],
        correctAnswer: 0,
      },
      {
        question: "Which country has won the most Olympic gold medals in history?",
        options: ["China", "Russia", "Germany", "United States"],
        correctAnswer: 3,
      },
      {
        question: "Who is the lead singer of the rock band Foo Fighters?",
        options: ["Dave Grohl", "Kurt Cobain", "Eddie Vedder", "Billie Joe Armstrong"],
        correctAnswer: 0,
      },
      {
        question: "Which baseball player broke the home run record in 2022?",
        options: ["Mike Trout", "Aaron Judge", "Albert Pujols", "Shohei Ohtani"],
        correctAnswer: 1,
      },
      {
        question: "Who won the NBA Most Valuable Player Award in 2022?",
        options: ["Stephen Curry", "Kevin Durant", "Nikola Jokic", "Giannis Antetokounmpo"],
        correctAnswer: 2,
      },
      {
        question: "Which TV series is based on the life of Formula 1 driver Ayrton Senna?",
        options: ["Drive to Survive", "Senna", "Grand Prix", "Racing with Senna"],
        correctAnswer: 1,
      },
      {
        question: "Who is the most followed person on Instagram?",
        options: ["Cristiano Ronaldo", "Kylie Jenner", "Selena Gomez", "Dwayne Johnson"],
        correctAnswer: 0,
      },
      {
        question: "Which country won the Rugby World Cup in 2019?",
        options: ["New Zealand", "South Africa", "England", "Australia"],
        correctAnswer: 1,
      },
      {
        question: "Who is the highest-scoring NBA player of all time?",
        options: ["LeBron James", "Kareem Abdul-Jabbar", "Michael Jordan", "Kobe Bryant"],
        correctAnswer: 1,
      },
      {
        question: "Which esports game has the largest prize pool?",
        options: ["League of Legends", "Dota 2", "Counter-Strike", "Fortnite"],
        correctAnswer: 1,
      },
      {
        question: "Who won the UEFA Champions League in 2022?",
        options: ["Manchester City", "Liverpool", "Real Madrid", "Bayern Munich"],
        correctAnswer: 2,
      },
      {
        question: "Which actor played Lance Armstrong in the biographical film?",
        options: ["Ben Affleck", "Matt Damon", "Bradley Cooper", "Ben Foster"],
        correctAnswer: 3,
      },
      {
        question: "Who is the most successful female tennis player of all time?",
        options: ["Serena Williams", "Steffi Graf", "Margaret Court", "Venus Williams"],
        correctAnswer: 2,
      },
      {
        question: "Which country has won the most Cricket World Cups?",
        options: ["England", "Australia", "India", "West Indies"],
        correctAnswer: 1,
      },
      {
        question: "Who is the creator of the Marvel Cinematic Universe?",
        options: ["Kevin Feige", "Joss Whedon", "Stan Lee", "Robert Downey Jr."],
        correctAnswer: 0,
      },
      {
        question: "Which NFL team won the Super Bowl in 2022?",
        options: ["Los Angeles Rams", "Kansas City Chiefs", "Tampa Bay Buccaneers", "New England Patriots"],
        correctAnswer: 0,
      },
      {
        question: "Who is the highest-paid actor in 2022?",
        options: ["Dwayne Johnson", "Tom Cruise", "Chris Hemsworth", "Robert Downey Jr."],
        correctAnswer: 0,
      },
      {
        question: "Which golfer has won the most major championships?",
        options: ["Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Phil Mickelson"],
        correctAnswer: 1,
      },
      {
        question: "Who won the Nobel Prize in Literature in 2022?",
        options: ["Salman Rushdie", "Annie Ernaux", "Kazuo Ishiguro", "Orhan Pamuk"],
        correctAnswer: 1,
      },
      {
        question: "Which streaming platform produced the series 'Stranger Things'?",
        options: ["Hulu", "Amazon Prime", "Netflix", "Disney+"],
        correctAnswer: 2,
      },
      {
        question: "Who won the Eurovision Song Contest in 2022?",
        options: ["Italy", "Ukraine", "United Kingdom", "Spain"],
        correctAnswer: 1,
      },
      {
        question: "Which video game franchise features Geralt of Rivia?",
        options: ["Assassin's Creed", "The Witcher", "Elder Scrolls", "Dragon Age"],
        correctAnswer: 1,
      },
      {
        question: "Who is the creator of the animated series 'Rick and Morty'?",
        options: ["Seth MacFarlane", "Justin Roiland", "Dan Harmon", "Matt Groening"],
        correctAnswer: 1,
      },
      {
        question: "Which K-pop group has the most YouTube subscribers?",
        options: ["BLACKPINK", "BTS", "EXO", "TWICE"],
        correctAnswer: 1,
      },
      {
        question: "Who won the Best Director Oscar in 2023?",
        options: ["Steven Spielberg", "Daniel Kwan", "Martin McDonagh", "Todd Field"],
        correctAnswer: 0,
      },
      {
        question: "Which podcast has the most global listeners?",
        options: ["Joe Rogan Experience", "Serial", "This American Life", "Stuff You Should Know"],
        correctAnswer: 0,
      },
      {
        question: "What was the highest-grossing movie of 2022?",
        options: ["Avatar: The Way of Water", "Top Gun: Maverick", "Black Panther: Wakanda Forever", "Jurassic World Dominion"],
        correctAnswer: 1,
      },
      {
        question: "Which actor has won the most Emmy Awards?",
        options: ["Alec Baldwin", "Julia Louis-Dreyfus", "Ed O'Neill", "Bryan Cranston"],
        correctAnswer: 1,
      },
      {
        question: "Who created the animated series 'South Park'?",
        options: ["Matt Stone and Trey Parker", "Seth MacFarlane", "Mike Judge", "Matt Groening"],
        correctAnswer: 0,
      },
      {
        question: "Which esports game has the largest global audience?",
        options: ["League of Legends", "Dota 2", "Counter-Strike", "Fortnite"],
        correctAnswer: 0,
      },
      {
        question: "Who is the most followed musician on Spotify?",
        options: ["Ed Sheeran", "Drake", "Bad Bunny", "Taylor Swift"],
        correctAnswer: 2,
      },
      {
        question: "Which TV show won the most Emmy Awards in 2022?",
        options: ["Succession", "Ted Lasso", "The White Lotus", "Abbott Elementary"],
        correctAnswer: 2,
      },
      {
        question: "Who is the highest-paid YouTuber?",
        options: ["MrBeast", "PewDiePie", "Markiplier", "Logan Paul"],
        correctAnswer: 0,
      },
      {
        question: "Which comic book character was created by Stan Lee and Steve Ditko?",
        options: ["Iron Man", "Thor", "Spider-Man", "Hulk"],
        correctAnswer: 2,
      },
      {
        question: "What was the first original Netflix series?",
        options: ["House of Cards", "Orange Is the New Black", "Narcos", "Stranger Things"],
        correctAnswer: 0,
      },
      {
        question: "Who won the Grammy for Record of the Year in 2023?",
        options: ["Lizzo", "Harry Styles", "Beyoncé", "Adele"],
        correctAnswer: 0,
      },
      {
        question: "Which video game has sold the most copies worldwide?",
        options: ["Minecraft", "Grand Theft Auto V", "Tetris", "Wii Sports"],
        correctAnswer: 2,
      },
      {
        question: "Who directed the 'John Wick' film series?",
        options: ["Chad Stahelski", "David Leitch", "Keanu Reeves", "Justin Lin"],
        correctAnswer: 0,
      },
      {
        question: "Which streaming platform has the most subscribers globally?",
        options: ["Netflix", "Disney+", "Amazon Prime Video", "HBO Max"],
        correctAnswer: 0,
      },
      {
        question: "Who is the most followed celebrity on TikTok?",
        options: ["Charli D'Amelio", "Khaby Lame", "Addison Rae", "Bella Poarch"],
        correctAnswer: 0,
      },
      {
        question: "Which animated film won the Oscar for Best Animated Feature in 2023?",
        options: ["Turning Red", "Guillermo del Toro's Pinocchio", "Puss in Boots: The Last Wish", "Marcel the Shell with Shoes On"],
        correctAnswer: 1,
      },
      {
        question: "Who is the most followed person on Instagram?",
        options: ["Cristiano Ronaldo", "Kylie Jenner", "Selena Gomez", "Dwayne Johnson"],
        correctAnswer: 0,
      },
      {
        question: "Which TV series has won the most Emmy Awards of all time?",
        options: ["Game of Thrones", "Saturday Night Live", "Frasier", "The Simpsons"],
        correctAnswer: 1,
      },
      {
        question: "Which Broadway musical won the most Tony Awards in 2022?",
        options: ["Hamilton", "Six", "A Strange Loop", "Company"],
        correctAnswer: 2,
      },
      {
        question: "Who composed the soundtrack for the movie 'Dune'?",
        options: ["Hans Zimmer", "John Williams", "Danny Elfman", "Michael Giacchino"],
        correctAnswer: 0,
      },
      {
        question: "Which video game won Game of the Year at The Game Awards in 2022?",
        options: ["Elden Ring", "God of War Ragnarök", "Horizon Forbidden West", "Stray"],
        correctAnswer: 0,
      },
      {
        question: "Who is the youngest person to win a Grammy Album of the Year?",
        options: ["Billie Eilish", "Taylor Swift", "Olivia Rodrigo", "Lorde"],
        correctAnswer: 0,
      },
      {
        question: "Which streaming service produced 'The Mandalorian'?",
        options: ["HBO Max", "Netflix", "Amazon Prime", "Disney+"],
        correctAnswer: 3,
      },
      {
        question: "Who directed the film 'Everything Everywhere All at Once'?",
        options: ["Daniels", "Wes Anderson", "Jordan Peele", "Guillermo del Toro"],
        correctAnswer: 0,
      },
      {
        question: "Which comic book character was created by Jack Kirby?",
        options: ["Spider-Man", "Black Panther", "Superman", "Batman"],
        correctAnswer: 1,
      },
      {
        question: "Who is the lead vocalist of the band Imagine Dragons?",
        options: ["Dan Reynolds", "Tyler Joseph", "Brendon Urie", "Patrick Stump"],
        correctAnswer: 0,
      },
      {
        question: "Which animated film won the Annie Award for Best Animated Feature in 2023?",
        options: ["Turning Red", "Guillermo del Toro's Pinocchio", "Puss in Boots: The Last Wish", "Marcel the Shell with Shoes On"],
        correctAnswer: 1,
      },
      {
        question: "Who wrote the original novel for 'The Witcher' series?",
        options: ["George R.R. Martin", "J.R.R. Tolkien", "Andrzej Sapkowski", "Stephen King"],
        correctAnswer: 2,
      },
      {
        question: "Which musician has won the most Grammy Awards of all time?",
        options: ["Beyoncé", "Alison Krauss", "Quincy Jones", "Georg Solti"],
        correctAnswer: 3,
      },
      {
        question: "Who created the TV series 'Ted Lasso'?",
        options: ["Jason Sudeikis", "Bill Lawrence", "Brendan Hunt", "Joe Kelly"],
        correctAnswer: 1,
      },
      {
        question: "Which esports game has the highest total prize money?",
        options: ["Dota 2", "Counter-Strike", "League of Legends", "Fortnite"],
        correctAnswer: 0,
      },
      {
        question: "Who is the most followed musician on TikTok?",
        options: ["Bella Poarch", "Jason Derulo", "Charlie D'Amelio", "Addison Rae"],
        correctAnswer: 0,
      },
      {
        question: "Which actor has won the most Academy Awards?",
        options: ["Jack Nicholson", "Meryl Streep", "Daniel Day-Lewis", "Katharine Hepburn"],
        correctAnswer: 3,
      },
      {
        question: "Who composed the music for 'Succession' TV series?",
        options: ["Hans Zimmer", "Nicholas Britell", "Ramin Djawadi", "Bear McCreary"],
        correctAnswer: 1,
      },
      {
        question: "Which country has won the most Eurovision Song Contests?",
        options: ["Sweden", "France", "United Kingdom", "Ireland"],
        correctAnswer: 3,
      },
      {
        question: "Who is the creator of the animated series 'Big Mouth'?",
        options: ["Nick Kroll", "Andrew Goldberg", "Mark Levin", "Jennifer Flackett"],
        correctAnswer: 1,
      },
      {
        question: "Which video game franchise features Aloy as the main character?",
        options: ["Horizon", "Tomb Raider", "Assassin's Creed", "Far Cry"],
        correctAnswer: 0,
      },
      {
        question: "Who won the Nobel Prize in Literature in 2022?",
        options: ["Salman Rushdie", "Annie Ernaux", "Kazuo Ishiguro", "Orhan Pamuk"],
        correctAnswer: 1,
      },
      {
        question: "Which band has the most Grammy Awards?",
        options: ["U2", "Foo Fighters", "Beyoncé", "Chili Peppers"],
        correctAnswer: 2,
      },
      {
        question: "Who directed the documentary 'Free Solo'?",
        options: ["Jimmy Chin", "Elizabeth Chai Vasarhelyi", "Both", "Neither"],
        correctAnswer: 2,
      },
      {
        question: "Which streaming platform produces 'The Boys'?",
        options: ["Netflix", "HBO Max", "Amazon Prime", "Hulu"],
        correctAnswer: 2,
      },
      {
        question: "Who is the highest-paid actor in 2022?",
        options: ["Tom Cruise", "Dwayne Johnson", "Chris Hemsworth", "Will Smith"],
        correctAnswer: 1,
      },
      {
        question: "Which musician has their own rum brand?",
        options: ["Drake", "Post Malone", "Kendrick Lamar", "Bad Bunny"],
        correctAnswer: 1,
      },
      {
        question: "Which AI-powered chatbot became a viral sensation in 2022?",
        options: ["Siri", "Alexa", "ChatGPT", "Google Assistant"],
        correctAnswer: 2,
      },
      {
        question: "Who won the first season of 'The Masked Singer' in the United States?",
        options: ["T-Pain", "Kandi Burruss", "Gladys Knight", "Wayne Brady"],
        correctAnswer: 0,
      },
      {
        question: "Which video game franchise features the character Arthur Morgan?",
        options: ["Red Dead Redemption", "Grand Theft Auto", "Assassin's Creed", "Far Cry"],
        correctAnswer: 0,
      },
      {
        question: "Who created the animated series 'BoJack Horseman'?",
        options: ["Raphael Bob-Waksberg", "Mike Schur", "Dan Harmon", "Seth MacFarlane"],
        correctAnswer: 0,
      },
      {
        question: "Which streaming platform produced 'The Witcher' series?",
        options: ["Amazon Prime", "HBO Max", "Netflix", "Hulu"],
        correctAnswer: 2,
      },
      {
        question: "Who won the Nobel Peace Prize in 2022?",
        options: ["Volodymyr Zelenskyy", "Malala Yousafzai", "Ales Bialiatski", "Memorial"],
        correctAnswer: 2,
      },
      {
        question: "Which band's reunion tour broke multiple ticket sales records in 2022?",
        options: ["ABBA", "Backstreet Boys", "Coldplay", "Metallica"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the film 'Top Gun: Maverick'?",
        options: ["Tony Scott", "Joseph Kosinski", "Christopher McQuarrie", "Jerry Bruckheimer"],
        correctAnswer: 1,
      },
      {
        question: "Which social media platform launched 'Threads' in 2023?",
        options: ["Twitter", "Facebook", "Instagram", "TikTok"],
        correctAnswer: 2,
      },
      {
        question: "Who won the Nobel Prize in Physics in 2022?",
        options: ["Alain Aspect", "John Clauser", "Anton Zeilinger", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Which TV series won the Golden Globe for Best Drama in 2023?",
        options: ["House of the Dragon", "Succession", "Better Call Saul", "The Crown"],
        correctAnswer: 1,
      },
      {
        question: "Who is the creator of the podcast 'Serial'?",
        options: ["Sarah Koenig", "Ira Glass", "Malcolm Gladwell", "Alex Bloomberg"],
        correctAnswer: 0,
      },
      {
        question: "Which video game developer created 'Elden Ring'?",
        options: ["CD Projekt Red", "FromSoftware", "Blizzard", "Ubisoft"],
        correctAnswer: 1,
      },
      {
        question: "Who won the TIME Person of the Year in 2022?",
        options: ["Volodymyr Zelenskyy", "Elon Musk", "Joe Biden", "Greta Thunberg"],
        correctAnswer: 0,
      },
      {
        question: "Which comedian hosted the 2023 Grammy Awards?",
        options: ["Trevor Noah", "Jimmy Kimmel", "Jimmy Fallon", "Trevor Noah"],
        correctAnswer: 0,
      },
      {
        question: "Who created the TV series 'The Bear'?",
        options: ["Christopher Storer", "FX Networks", "Hulu", "Both A and B"],
        correctAnswer: 3,
      },
      {
        question: "Which artist's documentary was released on Netflix in 2022?",
        options: ["Taylor Swift", "Beyoncé", "Lady Gaga", "Billie Eilish"],
        correctAnswer: 0,
      },
      {
        question: "Who won the World Cup in 2022?",
        options: ["France", "Brazil", "Argentina", "Germany"],
        correctAnswer: 2,
      },
      {
        question: "Which tech billionaire bought Twitter in 2022?",
        options: ["Jeff Bezos", "Mark Zuckerberg", "Elon Musk", "Bill Gates"],
        correctAnswer: 2,
      },
      {
        question: "Who starred in the biographical film 'Elvis'?",
        options: ["Tom Hanks", "Austin Butler", "Leonardo DiCaprio", "Brad Pitt"],
        correctAnswer: 1,
      },
      {
        question: "Which virtual reality platform was rebranded as 'Meta' in 2021?",
        options: ["Oculus", "HTC Vive", "PlayStation VR", "Microsoft HoloLens"],
        correctAnswer: 0,
      },
      {
        question: "Who created the popular web series 'Critical Role'?",
        options: ["Matthew Mercer", "Travis Willingham", "Felicia Day", "Wil Wheaton"],
        correctAnswer: 0,
      },
      {
        question: "Which indie game won 'Best Independent Game' in 2022?",
        options: ["Stray", "Cult of the Lamb", "Tunic", "Inscryption"],
        correctAnswer: 0,
      },
      {
        question: "Who is the creator of the popular YouTube channel 'MrBeast'?",
        options: ["Jimmy Donaldson", "Logan Paul", "David Dobrik", "PewDiePie"],
        correctAnswer: 0,
      },
      {
        question: "Which streaming platform exclusively hosts 'The Lord of the Rings: The Rings of Power'?",
        options: ["Netflix", "HBO Max", "Amazon Prime", "Disney+"],
        correctAnswer: 2,
      },
      {
        question: "Who won the Academy Award for Best International Film in 2023?",
        options: ["All Quiet on the Western Front", "Decision to Leave", "Close", "RRR"],
        correctAnswer: 0,
      },
      {
        question: "Which blockchain-based game became a global phenomenon in 2022?",
        options: ["Axie Infinity", "Decentraland", "The Sandbox", "CryptoKitties"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the critically acclaimed film 'The Banshees of Inisherin'?",
        options: ["Martin McDonagh", "Taika Waititi", "Guillermo del Toro", "Damien Chazelle"],
        correctAnswer: 0,
      },
      {
        question: "Which music festival made a massive comeback in 2022?",
        options: ["Coachella", "Burning Man", "Lollapalooza", "Glastonbury"],
        correctAnswer: 0,
      },
      {
        question: "Who created the popular true crime podcast 'Crime Junkie'?",
        options: ["Ashley Flowers", "Karen Kilgariff", "Georgia Hardstark", "Payne Lindsey"],
        correctAnswer: 0,
      },
      {
        question: "Which animated film won the Annie Award for Best Animated Feature in 2023?",
        options: ["Turning Red", "Guillermo del Toro's Pinocchio", "Puss in Boots: The Last Wish", "Marcel the Shell with Shoes On"],
        correctAnswer: 2,
      },
      {
        question: "Who is the most-followed creator on TikTok?",
        options: ["Charli D'Amelio", "Khaby Lame", "Addison Rae", "Bella Poarch"],
        correctAnswer: 1,
      },
      {
        question: "Which streaming service produced 'Wednesday'?",
        options: ["Netflix", "HBO Max", "Hulu", "Disney+"],
        correctAnswer: 0,
      },
      {
        question: "Who won the Nobel Prize in Literature in 2022?",
        options: ["Salman Rushdie", "Annie Ernaux", "Kazuo Ishiguro", "Orhan Pamuk"],
        correctAnswer: 1,
      },
      {
        question: "Which video game franchise features the character Aloy?",
        options: ["Horizon", "Tomb Raider", "Assassin's Creed", "Far Cry"],
        correctAnswer: 0,
      },
      {
        question: "Who composed the score for 'Top Gun: Maverick'?",
        options: ["Hans Zimmer", "John Williams", "Michael Giacchino", "Danny Elfman"],
        correctAnswer: 2,
      },
      {
        question: "Which social media platform launched audio-only rooms in 2022?",
        options: ["Twitter Spaces", "Facebook Rooms", "Instagram Live", "TikTok Live"],
        correctAnswer: 0,
      },
      {
        question: "Who created the TV series 'Abbott Elementary'?",
        options: ["Quinta Brunson", "Issa Rae", "Mindy Kaling", "Phoebe Waller-Bridge"],
        correctAnswer: 0,
      },
      {
        question: "Which NFT collection became most valuable in 2022?",
        options: ["Bored Ape Yacht Club", "CryptoPunks", "Azuki", "World of Women"],
        correctAnswer: 0,
      },
      {
        question: "Who won the Grammy for Album of the Year in 2023?",
        options: ["Harry Styles", "Beyoncé", "Lizzo", "Bad Bunny"],
        correctAnswer: 1,
      },
      {
        question: "Which AI art generator became a viral sensation in 2022?",
        options: ["DALL-E", "Midjourney", "Stable Diffusion", "Artbreeder"],
        correctAnswer: 1,
      },
      {
        question: "Who won the first season of 'The Voice' in the United States?",
        options: ["Javier Colon", "Cassadee Pope", "Danielle Bradbery", "Sawyer Fredericks"],
        correctAnswer: 0,
      },
      {
        question: "Which video game franchise features the character Kratos?",
        options: ["God of War", "Assassin's Creed", "Halo", "Uncharted"],
        correctAnswer: 0,
      },
      {
        question: "Who created the animated series 'Solar Opposites'?",
        options: ["Justin Roiland", "Dan Harmon", "Mike McMahan", "Rick and Morty Creators"],
        correctAnswer: 0,
      },
      {
        question: "Which streaming platform produced 'The Last of Us'?",
        options: ["Netflix", "HBO Max", "Amazon Prime", "Hulu"],
        correctAnswer: 1,
      },
      {
        question: "Who won the most prestigious award at the Cannes Film Festival in 2022?",
        options: ["Triangle of Sadness", "Decision to Leave", "Close", "RRR"],
        correctAnswer: 0,
      },
      {
        question: "Which music streaming platform launched 'Spotify Wrapped' in 2022?",
        options: ["Apple Music", "Spotify", "Tidal", "Amazon Music"],
        correctAnswer: 1,
      },
      {
        question: "Who directed the film 'The Batman'?",
        options: ["Christopher Nolan", "Matt Reeves", "Zack Snyder", "Todd Phillips"],
        correctAnswer: 1,
      },
      {
        question: "Which social media platform introduced 'BeReal'?",
        options: ["Instagram", "TikTok", "BeReal", "Snapchat"],
        correctAnswer: 2,
      },
      {
        question: "Who won the Nobel Prize in Chemistry in 2022?",
        options: ["Carolyn Bertozzi", "Morten Meldal", "K. Barry Sharpless", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Which TV series won the Emmy for Outstanding Drama Series in 2022?",
        options: ["Succession", "Squid Game", "Yellowjackets", "Ozark"],
        correctAnswer: 0,
      },
      {
        question: "Who created the podcast 'SmartLess'?",
        options: ["Jason Bateman", "Sean Hayes", "Will Arnett", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Which video game developer created 'Stray'?",
        options: ["BlueTwelve Studio", "Annapurna Interactive", "Devolver Digital", "Anikus"],
        correctAnswer: 0,
      },
      {
        question: "Who was named TIME Magazine's Person of the Year in 2022?",
        options: ["Volodymyr Zelenskyy", "Elon Musk", "Joe Biden", "Vladimir Putin"],
        correctAnswer: 0,
      },
      {
        question: "Which comedian hosted the 2023 Oscars ceremony?",
        options: ["Jimmy Kimmel", "Chris Rock", "Amy Schumer", "Regina Hall"],
        correctAnswer: 0,
      },
      {
        question: "Who created the TV series 'The Dropout'?",
        options: ["Elizabeth Meriwether", "Hulu", "ABC Studios", "Both A and B"],
        correctAnswer: 3,
      },
      {
        question: "Which artist's world tour broke multiple records in 2022?",
        options: ["Taylor Swift", "Bad Bunny", "Harry Styles", "Beyoncé"],
        correctAnswer: 1,
      },
      {
        question: "Who won the most Grammy Awards in 2023?",
        options: ["Beyoncé", "Harry Styles", "Lizzo", "Bad Bunny"],
        correctAnswer: 0,
      },
      {
        question: "Which tech company launched its first mixed-reality headset in 2023?",
        options: ["Apple", "Meta", "Microsoft", "Google"],
        correctAnswer: 0,
      },
      {
        question: "Who starred in the biographical film about Elvis Presley?",
        options: ["Tom Hanks", "Austin Butler", "Leonardo DiCaprio", "Brad Pitt"],
        correctAnswer: 1,
      },
      {
        question: "Who is known as the most followed person on TikTok?",
        options: ["Charli D'Amelio", "Khaby Lame", "Addison Rae", "Bella Poarch"],
        correctAnswer: 0,
      },
      {
        question: "Which YouTuber is known for extreme philanthropy and challenges?",
        options: ["PewDiePie", "MrBeast", "Logan Paul", "David Dobrik"],
        correctAnswer: 1,
      },
      {
        question: "Who created the viral dance challenge 'Renegade'?",
        options: ["Charli D'Amelio", "Addison Rae", "Jalaiah Harmon", "Dixie D'Amelio"],
        correctAnswer: 2,
      },
      {
        question: "Which social media influencer started the 'Sidemen' YouTube group?",
        options: ["KSI", "Logan Paul", "PewDiePie", "MrBeast"],
        correctAnswer: 0,
      },
      {
        question: "Who is known as the 'King of Instagram'?",
        options: ["Cristiano Ronaldo", "Kylie Jenner", "Dwayne Johnson", "Selena Gomez"],
        correctAnswer: 0,
      },
      {
        question: "Which influencer created the viral 'What I Eat in a Day' content trend?",
        options: ["Emma Chamberlain", "Addison Rae", "Zoe Sugg", "James Charles"],
        correctAnswer: 0,
      },
      {
        question: "Who is the most followed person on Instagram?",
        options: ["Cristiano Ronaldo", "Kylie Jenner", "Selena Gomez", "Dwayne Johnson"],
        correctAnswer: 0,
      },
      {
        question: "Which social media star is known for reaction videos?",
        options: ["David Dobrik", "Khaby Lame", "Logan Paul", "Mr Beast"],
        correctAnswer: 1,
      },
      {
        question: "Who created the viral 'Smooth Brain' meme?",
        options: ["Charli D'Amelio", "Bella Poarch", "Addison Rae", "Emma Chamberlain"],
        correctAnswer: 1,
      },
      {
        question: "Which influencer is known for tech reviews and unboxing videos?",
        options: ["MKBHD", "Casey Neistat", "David Dobrik", "Logan Paul"],
        correctAnswer: 0,
      },
      {
        question: "Who is the most followed beauty influencer on YouTube?",
        options: ["James Charles", "Jeffree Star", "NikkieTutorials", "Bretman Rock"],
        correctAnswer: 1,
      },
      {
        question: "Which social media personality started the 'Impaulsive' podcast?",
        options: ["Jake Paul", "Logan Paul", "KSI", "David Dobrik"],
        correctAnswer: 1,
      },
      {
        question: "Who is known for viral comedy skits on TikTok?",
        options: ["Khaby Lame", "Charli D'Amelio", "Addison Rae", "Zach King"],
        correctAnswer: 3,
      },
      {
        question: "Which influencer is known for fitness and lifestyle content?",
        options: ["Zach King", "Dwayne Johnson", "David Dobrik", "Logan Paul"],
        correctAnswer: 1,
      },
      {
        question: "Who created the viral 'Berries and Cream' TikTok trend?",
        options: ["Khaby Lame", "Jack Harlow", "Jack Stauber", "David Dobrik"],
        correctAnswer: 2,
      },
      {
        question: "Which social media platform did Mr. Beast first gain popularity on?",
        options: ["Instagram", "TikTok", "YouTube", "Twitch"],
        correctAnswer: 2,
      },
      {
        question: "Who is known for creating viral challenge videos on YouTube?",
        options: ["David Dobrik", "Logan Paul", "Jake Paul", "PewDiePie"],
        correctAnswer: 0,
      },
      {
        question: "Which influencer launched a successful makeup brand?",
        options: ["James Charles", "Jeffree Star", "Addison Rae", "Charli D'Amelio"],
        correctAnswer: 1,
      },
      {
        question: "Who is the most followed individual creator on Twitch?",
        options: ["Ninja", "Shroud", "TimTheTatman", "xQc"],
        correctAnswer: 0,
      },
      {
        question: "Which social media star became famous for lip-syncing videos?",
        options: ["Charli D'Amelio", "Addison Rae", "Bella Poarch", "Jason Derulo"],
        correctAnswer: 0,
      },
      {
        question: "Who created the viral 'Despacito' dance challenge?",
        options: ["Jason Derulo", "Luis Fonsi", "Daddy Yankee", "Charlie D'Amelio"],
        correctAnswer: 1,
      },
      {
        question: "Which YouTuber is known for elaborate science experiments?",
        options: ["Mark Rober", "MKBHD", "Casey Neistat", "Marques Brownlee"],
        correctAnswer: 0,
      },
      {
        question: "Who is the most followed podcast host on Spotify?",
        options: ["Joe Rogan", "Call Her Daddy", "Crime Junkie", "Serial"],
        correctAnswer: 0,
      },
      {
        question: "Which social media personality launched a successful energy drink brand?",
        options: ["Logan Paul", "KSI", "Mr Beast", "David Dobrik"],
        correctAnswer: 1,
      },
      {
        question: "Who is known for viral cooking content on TikTok?",
        options: ["Gordon Ramsay", "Khaby Lame", "Nusret Gökçe", "Salt Bae"],
        correctAnswer: 2,
      },
      {
        question: "Which influencer is known for financial advice content?",
        options: ["Graham Stephan", "Dave Ramsey", "Gary Vaynerchuk", "Tai Lopez"],
        correctAnswer: 0,
      },
      {
        question: "Who created the viral 'Corn Kid' video?",
        options: ["Jimmy Kimmel", "Jimmy Fallon", "Recess Therapy", "Ellen DeGeneres"],
        correctAnswer: 2,
      },
      {
        question: "Which social media star is known for pranks and challenges?",
        options: ["David Dobrik", "Logan Paul", "Jake Paul", "MrBeast"],
        correctAnswer: 0,
      },
      {
        question: "Who is the most followed travel influencer on Instagram?",
        options: ["Murad Osmann", "Jack Morris", "Kiersten Rich", "Chris Burkard"],
        correctAnswer: 0,
      },
      {
        question: "Which TikTok creator is known for comedy skits about work life?",
        options: ["Khaby Lame", "Zach King", "Chris Mann", "Dylan Mulvaney"],
        correctAnswer: 2,
      },
      {
        question: "Which animated film won the Oscar for Best Animated Feature in 2023?",
        options: ["Turning Red", "Guillermo del Toro's Pinocchio", "Puss in Boots: The Last Wish", "Marcel the Shell with Shoes On"],
        correctAnswer: 1,
      },
      {
        question: "Who directed the critically acclaimed film 'Everything Everywhere All at Once'?",
        options: ["Daniels", "Wes Anderson", "Jordan Peele", "Guillermo del Toro"],
        correctAnswer: 0,
      },
      {
        question: "Which video game won Game of the Year at The Game Awards in 2022?",
        options: ["Elden Ring", "God of War Ragnarök", "Horizon Forbidden West", "Stray"],
        correctAnswer: 0,
      },
      {
        question: "Who composed the soundtrack for the movie 'Dune'?",
        options: ["Hans Zimmer", "John Williams", "Danny Elfman", "Michael Giacchino"],
        correctAnswer: 0,
      },
      {
        question: "Which streaming platform exclusively hosts 'The Lord of the Rings: The Rings of Power'?",
        options: ["Netflix", "HBO Max", "Amazon Prime", "Disney+"],
        correctAnswer: 2,
      },
      {
        question: "Who won the Nobel Prize in Literature in 2022?",
        options: ["Salman Rushdie", "Annie Ernaux", "Kazuo Ishiguro", "Orhan Pamuk"],
        correctAnswer: 1,
      },
      {
        question: "Which indie game won 'Best Independent Game' in 2022?",
        options: ["Stray", "Cult of the Lamb", "Tunic", "Inscryption"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the critically acclaimed film 'The Banshees of Inisherin'?",
        options: ["Martin McDonagh", "Taika Waititi", "Guillermo del Toro", "Damien Chazelle"],
        correctAnswer: 0,
      },
      {
        question: "Which music festival made a massive comeback in 2022?",
        options: ["Coachella", "Burning Man", "Lollapalooza", "Glastonbury"],
        correctAnswer: 0,
      },
      {
        question: "Who created the TV series 'Abbott Elementary'?",
        options: ["Quinta Brunson", "Issa Rae", "Mindy Kaling", "Phoebe Waller-Bridge"],
        correctAnswer: 0,
      },
      {
        question: "Which video game franchise features the character Aloy?",
        options: ["Horizon", "Tomb Raider", "Assassin's Creed", "Far Cry"],
        correctAnswer: 0,
      },
      {
        question: "Who composed the score for 'Top Gun: Maverick'?",
        options: ["Hans Zimmer", "John Williams", "Michael Giacchino", "Danny Elfman"],
        correctAnswer: 2,
      },
      {
        question: "Which tech company launched its first mixed-reality headset in 2023?",
        options: ["Apple", "Meta", "Microsoft", "Google"],
        correctAnswer: 0,
      },
      {
        question: "Who won the most Grammy Awards in 2023?",
        options: ["Beyoncé", "Harry Styles", "Lizzo", "Bad Bunny"],
        correctAnswer: 0,
      },
      {
        question: "Which blockchain-based game became a global phenomenon in 2022?",
        options: ["Axie Infinity", "Decentraland", "The Sandbox", "CryptoKitties"],
        correctAnswer: 0,
      },
      {
        question: "Which virtual reality game won 'Best VR/AR Game' in 2022?",
        options: ["Beat Saber", "Half-Life: Alyx", "Moss: Book II", "Resident Evil 4 VR"],
        correctAnswer: 2,
      },
      {
        question: "Who won the Golden Lion at the Venice Film Festival in 2022?",
        options: ["Tár", "All the Beauty and the Bloodshed", "No Bears", "The Banshees of Inisherin"],
        correctAnswer: 1,
      },
      {
        question: "Which documentary series won the Emmy for Outstanding Documentary or Nonfiction Series in 2022?",
        options: ["The Beatles: Get Back", "The Andy Warhol Diaries", "Stanley Tucci: Searching for Italy", "Allen v. Farrow"],
        correctAnswer: 0,
      },
      {
        question: "Who composed the score for 'The Batman'?",
        options: ["Hans Zimmer", "Ramin Djawadi", "Michael Giacchino", "Nicholas Britell"],
        correctAnswer: 2,
      },
      {
        question: "Which indie band won the Grammy for Best Alternative Music Album in 2023?",
        options: ["Big Thief", "Wet Leg", "Arcade Fire", "Yeah Yeah Yeahs"],
        correctAnswer: 1,
      },
      {
        question: "What was the first video game to be nominated for Best Picture at The Game Awards?",
        options: ["God of War Ragnarök", "Elden Ring", "Horizon Forbidden West", "A Plague Tale: Requiem"],
        correctAnswer: 1,
      },
      {
        question: "Which international film won the Oscar for Best International Feature Film in 2022?",
        options: ["Drive My Car", "Flee", "The Worst Person in the World", "Lunana: A Yak in the Classroom"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the critically acclaimed film 'Tár'?",
        options: ["Todd Field", "Damien Chazelle", "Martin McDonagh", "Guillermo del Toro"],
        correctAnswer: 0,
      },
      {
        question: "Which video game soundtrack won 'Best Score' at The Game Awards in 2022?",
        options: ["Elden Ring", "God of War Ragnarök", "Horizon Forbidden West", "Stray"],
        correctAnswer: 1,
      },
      {
        question: "Who won the Pulitzer Prize for Drama in 2022?",
        options: ["A Strange Loop", "The Lehman Trilogy", "Fat Ham", "Skeleton Crew"],
        correctAnswer: 2,
      },
      {
        question: "Which streaming platform produced the documentary 'Fire of Love'?",
        options: ["Netflix", "Disney+", "National Geographic", "Amazon Prime"],
        correctAnswer: 0,
      },
      {
        question: "Who won the Sundance Film Festival Grand Jury Prize in 2022?",
        options: ["Nanny", "Descendant", "A Love Song", "Happening"],
        correctAnswer: 0,
      },
      {
        question: "Which Broadway musical won the Tony Award for Best Musical in 2022?",
        options: ["A Strange Loop", "Six", "Company", "MJ: The Musical"],
        correctAnswer: 0,
      },
      {
        question: "Who won the Primetime Emmy for Outstanding Lead Actor in a Drama Series in 2022?",
        options: ["Lee Jung-jae", "Jason Bateman", "Bob Odenkirk", "Jeremy Strong"],
        correctAnswer: 0,
      },
      {
        question: "Which classical music album won a Grammy in 2023?",
        options: ["Awadagin Pratt: Variations", "Time Remembered", "Illuminations", "Passion & Poetry"],
        correctAnswer: 0,
      },
      {
        question: "Which experimental film won the Palme d'Or at Cannes Film Festival in 2022?",
        options: ["Triangle of Sadness", "Close", "Decision to Leave", "Broker"],
        correctAnswer: 0,
      },
      {
        question: "Who won the Booker Prize for Literature in 2022?",
        options: ["Shehan Karunatilaka", "Douglas Stuart", "NoViolet Bulawayo", "Alan Garner"],
        correctAnswer: 0,
      },
      {
        question: "Which independent video game won 'Best Debut' at The Game Awards in 2022?",
        options: ["Cult of the Lamb", "Neon White", "Immortality", "Tunic"],
        correctAnswer: 3,
      },
      {
        question: "Who directed the psychological thriller 'Barbarian'?",
        options: ["Jordan Peele", "Zach Cregger", "Mike Flanagan", "Ti West"],
        correctAnswer: 1,
      },
      {
        question: "Which album won the Mercury Prize in 2022?",
        options: ["Little Simz - Sometimes I Might Be Introvert", "Wet Leg - Wet Leg", "Self Esteem - Prioritise Pleasure", "Harry Styles - Harry's House"],
        correctAnswer: 0,
      },
      {
        question: "Who composed the score for 'The Northman'?",
        options: ["Trent Reznor", "Atticus Ross", "Robin Carolan", "Both B and C"],
        correctAnswer: 3,
      },
      {
        question: "Which documentary won Best Documentary at the Sundance Film Festival in 2022?",
        options: ["Navalny", "Fire of Love", "Descendant", "A House Made of Splinters"],
        correctAnswer: 0,
      },
      {
        question: "Who created the TV series 'The Bear'?",
        options: ["Christopher Storer", "Joel Thomas", "Joanna Calo", "Both A and B"],
        correctAnswer: 3,
      },
      {
        question: "Which video game developer created 'Immortality'?",
        options: ["Sam Barlow", "Annapurna Interactive", "Half Mermaid", "Both A and B"],
        correctAnswer: 3,
      },
      {
        question: "Who won the Turner Prize in 2022?",
        options: ["Veronica Ryan", "Tai Shani", "Gentle/Radical", "Rafał Zajko"],
        correctAnswer: 2,
      },
      {
        question: "Which film won the Golden Bear at Berlin International Film Festival in 2022?",
        options: ["Alcarràs", "Robe of Gems", "A Couple", "Rimini"],
        correctAnswer: 0,
      },
      {
        question: "Who wrote the novel 'Trust' that was adapted into a critically acclaimed film?",
        options: ["Hernan Diaz", "Sally Rooney", "Ottessa Moshfegh", "Ocean Vuong"],
        correctAnswer: 0,
      },
      {
        question: "Which experimental music album gained critical acclaim in 2022?",
        options: ["Beyoncé - Renaissance", "Rosalía - Motomami", "FKA Twigs - Caprisongs", "Björk - Fossora"],
        correctAnswer: 3,
      },
      {
        question: "Who directed the psychological horror film 'Smile'?",
        options: ["Parker Finn", "Ti West", "Mike Flanagan", "James Wan"],
        correctAnswer: 0,
      },
      {
        question: "Which podcast won 'Best Podcast' at the Audio Production Awards in 2022?",
        options: ["You're Dead to Me", "No Such Thing As A Fish", "Global News Podcast", "Today in Focus"],
        correctAnswer: 0,
      },
      {
        question: "Which experimental theater production won the Pulitzer Prize for Drama in 2022?",
        options: ["Skeleton Crew", "A Strange Loop", "Fat Ham", "The Lehman Trilogy"],
        correctAnswer: 2,
      },
      {
        question: "Who directed the critically acclaimed documentary 'All That Breathes'?",
        options: ["Shaunak Sen", "Kirsten Johnson", "Frederick Wiseman", "Steve James"],
        correctAnswer: 0,
      },
      {
        question: "Which indie video game won 'Best Narrative' at The Game Awards in 2022?",
        options: ["Pentiment", "Immortality", "Citizen Sleeper", "A Plague Tale: Requiem"],
        correctAnswer: 0,
      },
      {
        question: "Who composed the original score for the film 'Tár'?",
        options: ["Hildur Guðnadóttir", "Nicholas Britell", "Jonny Greenwood", "Hans Zimmer"],
        correctAnswer: 1,
      },
      {
        question: "Which international film won the Grand Prix at Cannes Film Festival in 2022?",
        options: ["Close", "Decision to Leave", "Broker", "Stars at Noon"],
        correctAnswer: 0,
      },
      {
        question: "Who wrote the critically acclaimed novel 'Tomorrow, and Tomorrow, and Tomorrow'?",
        options: ["Gabrielle Zevin", "Sally Rooney", "Ocean Vuong", "Ottessa Moshfegh"],
        correctAnswer: 0,
      },
      {
        question: "Which experimental music album received widespread critical acclaim in 2022?",
        options: ["Rosalía - Motomami", "Björk - Fossora", "FKA Twigs - Caprisongs", "Caroline Polachek - Desire, I Want to Turn Into You"],
        correctAnswer: 1,
      },
      {
        question: "Who directed the psychological horror film 'Men'?",
        options: ["Alex Garland", "Ari Aster", "Jordan Peele", "Robert Eggers"],
        correctAnswer: 0,
      },
      {
        question: "Which podcast won the Peabody Award in 2022?",
        options: ["Serial", "This American Life", "Dolly Parton's America", "Radiolab"],
        correctAnswer: 2,
      },
      {
        question: "Who won the National Book Award for Fiction in 2022?",
        options: ["Demon Copperhead", "Trust", "The Rabbit Hutch", "Reese Witherspoon's Book Club Pick"],
        correctAnswer: 0,
      },
      {
        question: "Which avant-garde theater company received significant critical acclaim in 2022?",
        options: ["Elevator Repair Service", "Wooster Group", "Nature Theater of Oklahoma", "Young Jean Lee's Theater Company"],
        correctAnswer: 0,
      },
      {
        question: "Who created the experimental TV series 'Severance'?",
        options: ["Dan Erickson", "Ben Stiller", "Both A and B", "Neither"],
        correctAnswer: 2,
      },
      {
        question: "Which independent film distribution company gained significant attention in 2022?",
        options: ["A24", "Neon", "Bleecker Street", "IFC Films"],
        correctAnswer: 0,
      },
      {
        question: "Who won the MacArthur 'Genius' Grant in the arts in 2022?",
        options: ["Tania León", "Jawole Willa Jo Zollar", "Raven Chacon", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Which experimental art exhibition gained international recognition in 2022?",
        options: ["Yayoi Kusama at Tate Modern", "Olafur Eliasson at Tate", "Ai Weiwei at Design Museum", "Marina Abramović retrospective"],
        correctAnswer: 0,
      },
      {
        question: "Which experimental opera premiered at the Met in 2022?",
        options: ["Eurydice", "The Hours", "Fire Shut Up in My Bones", "Dead Man Walking"],
        correctAnswer: 0,
      },
      {
        question: "Who won the PEN/Faulkner Award for Fiction in 2022?",
        options: ["Honorée Fanonne Jeffers", "Dawnie Walton", "Anthony Veasna So", "Namwali Serpell"],
        correctAnswer: 0,
      },
      {
        question: "Which independent game studio created 'Norco'?",
        options: ["Geography of Robots", "Finji", "Fullbright", "Cardboard Computer"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the experimental film 'Aftersun'?",
        options: ["Charlotte Wells", "Kogonada", "Sean Durkin", "Ari Aster"],
        correctAnswer: 0,
      },
      {
        question: "Which contemporary art museum won the Art Museum of the Year Award in 2022?",
        options: ["Gropius Bau", "Kunsthaus Zürich", "Moderna Museet", "Tate St. Ives"],
        correctAnswer: 0,
      },
      {
        question: "Who composed the experimental music piece 'Flood' in 2022?",
        options: ["Anna Thorvaldsdottir", "Caroline Shaw", "Missy Mazzoli", "Julia Wolfe"],
        correctAnswer: 0,
      },
      {
        question: "Which independent film won the NEXT Audience Award at Sundance in 2022?",
        options: ["Resurrection", "Dual", "After Yang", "Happening"],
        correctAnswer: 0,
      },
      {
        question: "Who created the avant-garde TV series 'We Are Lady Parts'?",
        options: ["Nida Manzoor", "Phoebe Waller-Bridge", "Michaela Coel", "Issa Rae"],
        correctAnswer: 0,
      },
      {
        question: "Which independent game explored unique narrative mechanics in 2022?",
        options: ["Citizen Sleeper", "Norco", "Signalis", "Immortality"],
        correctAnswer: 0,
      },
      {
        question: "Who won the MacArthur 'Genius' Grant for experimental theater in 2022?",
        options: ["Taylor Mac", "Young Jean Lee", "Suzan-Lori Parks", "Lileana Blain-Cruz"],
        correctAnswer: 0,
      },
      {
        question: "Which independent film distribution platform gained prominence in 2022?",
        options: ["MUBI", "Criterion Channel", "Kanopy", "Film Movement"],
        correctAnswer: 0,
      },
      {
        question: "Who wrote the experimental novel 'Lapvona'?",
        options: ["Ottessa Moshfegh", "Rachel Cusk", "Jenny Erpenbeck", "Deborah Levy"],
        correctAnswer: 0,
      },
      {
        question: "Which contemporary dance company received critical acclaim in 2022?",
        options: ["Alonzo King LINES Ballet", "Hubbard Street Dance Chicago", "Mark Morris Dance Group", "Alvin Ailey American Dance Theater"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the experimental documentary 'All That Breathes'?",
        options: ["Shaunak Sen", "Kirsten Johnson", "Joshua Oppenheimer", "Laura Poitras"],
        correctAnswer: 0,
      },
      {
        question: "Which independent podcast won a major audio documentary award in 2022?",
        options: ["The Trojan Horse Affair", "Wind of Change", "Heavyweight", "Normal Gossip"],
        correctAnswer: 0,
      },  
      {
        question: "Which avant-garde theater production won an Obie Award in 2022?",
        options: ["Is This A Room", "Dana H.", "Sanctuary City", "Chicken & Biscuits"],
        correctAnswer: 0,
      },
      {
        question: "Who won the National Book Critics Circle Award for Fiction in 2022?",
        options: ["Percival Everett", "Tess Gunty", "Mohsin Hamid", "Valeria Luiselli"],
        correctAnswer: 1,
      },
      {
        question: "Which independent game studio created 'Signalis'?",
        options: ["Rose-Engine", "Tender Claws", "Accidental Queens", "Might and Delight"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the experimental film 'Happening'?",
        options: ["Audrey Diwan", "Céline Sciamma", "Alice Diop", "Rebecca Zlotowski"],
        correctAnswer: 0,
      },
      {
        question: "Which contemporary art biennale gained international attention in 2022?",
        options: ["Venice Biennale", "Berlin Biennale", "Whitney Biennial", "Sydney Biennale"],
        correctAnswer: 0,
      },
      {
      question: "who Is The Best Person In The World?",
      options: ["Ahmed Fadl" , "Cristaino Ronaldo" , "Lionel Messi" , "Neymar"],
      correctAnswer: 0 ,
      },
      {
        question: "Who composed the experimental electronic album 'Fossora' in 2022?",
        options: ["Björk", "Holly Herndon", "Oneohtrix Point Never", "Laurel Halo"],
        correctAnswer: 0,
      },
      {
        question: "Which independent film won the FIPRESCI Prize at Cannes in 2022?",
        options: ["Broker", "Pacifiction", "Crimes of the Future", "Showing Up"],
        correctAnswer: 0,
      },
      {
        question: "Who created the avant-garde TV series 'Los Espookys'?",
        options: ["Julio Torres", "Ana Fabrega", "Fred Armisen", "Both A and B"],
        correctAnswer: 3,
      },
      {
        question: "Which independent game explored unique time manipulation mechanics in 2022?",
        options: ["Deathloop", "Twelve Minutes", "Returnal", "The Forgotten City"],
        correctAnswer: 3,
      },
      {
        question: "Who won the MacArthur 'Genius' Grant for experimental music in 2022?",
        options: ["Tyshawn Sorey", "Mary Halvorson", "Jen Shyu", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Which independent film distribution platform launched a notable series in 2022?",
        options: ["MUBI Go", "Criterion Channel Voyages", "Kanopy Selects", "Film Movement Plus"],
        correctAnswer: 0,
      },
      {
        question: "Who wrote the experimental novel 'The Candy House'?",
        options: ["Jennifer Egan", "George Saunders", "Karen Russell", "Ben Marcus"],
        correctAnswer: 0,
      },
      {
        question: "Which contemporary performance art piece gained critical acclaim in 2022?",
        options: ["Marina Abramović: PAC Milano", "Laurie Anderson: Homeland", "Robert Wilson: Letter to a Man", "Pina Bausch: Vollmond"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the experimental documentary 'Moonage Daydream'?",
        options: ["Brett Morgen", "Todd Haynes", "Asif Kapadia", "Morgan Neville"],
        correctAnswer: 0,
      },
      {
        question: "Which independent podcast explored an innovative narrative structure in 2022?",
        options: ["Normal Gossip", "The Trojan Horse Affair", "Ghost Story", "Blown Mind"],
        correctAnswer: 0,
      },
      {
        question: "Which national team won the 2022 FIFA World Cup in Qatar?",
        options: ["France", "Brazil", "Argentina", "Germany"],
        correctAnswer: 2,
      },
      {
        question: "Who won the Ballon d'Or in 2022?",
        options: ["Lionel Messi", "Kylian Mbappé", "Karim Benzema", "Robert Lewandowski"],
        correctAnswer: 2,
      },
      {
        question: "Which club won the UEFA Champions League in 2022?",
        options: ["Manchester City", "Liverpool", "Real Madrid", "Bayern Munich"],
        correctAnswer: 2,
      },
      {
        question: "Who was the top goal scorer in the 2022 FIFA World Cup?",
        options: ["Lionel Messi", "Kylian Mbappé", "Cristiano Ronaldo", "Harry Kane"],
        correctAnswer: 1,
      },
      {
        question: "Which experimental film won Best International Feature at the Academy Awards in 2023?",
        options: ["All Quiet on the Western Front", "Decision to Leave", "Close", "RRR"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the critically acclaimed documentary about football 'Diego Maradona'?",
        options: ["Asif Kapadia", "Werner Herzog", "Martin Scorsese", "Ken Burns"],
        correctAnswer: 0,
      },
      {
        question: "Which video game franchise features the most realistic football management simulation?",
        options: ["FIFA", "Pro Evolution Soccer", "Football Manager", "Rocket League"],
        correctAnswer: 2,
      },
      {
        question: "Who won the Premier League Golden Boot in the 2021-2022 season?",
        options: ["Mohamed Salah", "Son Heung-min", "Harry Kane", "Cristiano Ronaldo"],
        correctAnswer: 0,
      },
      {
        question: "Which experimental music album gained critical acclaim in 2022?",
        options: ["Björk - Fossora", "Rosalía - Motomami", "Bad Bunny - Un Verano Sin Ti", "Caroline Polachek - Desire, I Want to Turn Into You"],
        correctAnswer: 0,
      },
      {
        question: "Who won the UEFA European Women's Championship in 2022?",
        options: ["France", "Germany", "Netherlands", "England"],
        correctAnswer: 3,
      },
      {
        question: "Which independent game explored unique narrative mechanics in 2022?",
        options: ["Citizen Sleeper", "Norco", "Pentiment", "Immortality"],
        correctAnswer: 2,
      },
      {
        question: "Who was named FIFA Best Men's Player in 2022?",
        options: ["Lionel Messi", "Karim Benzema", "Robert Lewandowski", "Kylian Mbappé"],
        correctAnswer: 1,
      },
      {
        question: "Which avant-garde theater production won critical acclaim in 2022?",
        options: ["A Strange Loop", "Fat Ham", "The Lehman Trilogy", "Is This A Room"],
        correctAnswer: 1,
      },
      {
        question: "Who won the Copa Libertadores in 2022?",
        options: ["Flamengo", "Palmeiras", "Athletico Paranaense", "Boca Juniors"],
        correctAnswer: 2,
      },
      {
        question: "Which experimental documentary about sports gained recognition in 2022?",
        options: ["The Last Dance", "Senna", "Diego Maradona", "All or Nothing: Manchester City"],
        correctAnswer: 3,
      },
      {
        question: "Which footballer won the Golden Boot at the 2022 World Cup?",
        options: ["Kylian Mbappé", "Lionel Messi", "Marcus Rashford", "Cristiano Ronaldo"],
        correctAnswer: 0,
      },
      {
        question: "Which experimental film explored the world of football culture?",
        options: ["The Damned United", "Goal!", "Looking for Eric", "Diego Maradona"],
        correctAnswer: 3,
      },
      {
        question: "Who is the youngest player to win the Ballon d'Or?",
        options: ["Kylian Mbappé", "Erling Haaland", "Michael Owen", "Lionel Messi"],
        correctAnswer: 3,
      },
      {
        question: "Which video game franchise is most renowned for its football management simulation?",
        options: ["FIFA", "Pro Evolution Soccer", "Football Manager", "Rocket League"],
        correctAnswer: 2,
      },
      {
        question: "Who directed the critically acclaimed football documentary 'Senna'?",
        options: ["Asif Kapadia", "Werner Herzog", "Martin Scorsese", "Ken Burns"],
        correctAnswer: 0,
      },
      {
        question: "Which national team has won the most UEFA European Championships?",
        options: ["Germany", "Spain", "France", "Italy"],
        correctAnswer: 0,
      },
      {
        question: "Who won the UEFA Women's Euro 2022?",
        options: ["France", "Germany", "Netherlands", "England"],
        correctAnswer: 3,
      },
      {
        question: "Which experimental music album referenced football culture in 2022?",
        options: ["Bad Bunny - Un Verano Sin Ti", "Rosalía - Motomami", "Drake - Honestly, Nevermind", "The Weeknd - Dawn FM"],
        correctAnswer: 0,
      },
      {
        question: "Which independent game explored unique sports narrative in 2022?",
        options: ["Rollerdrome", "Windjammers 2", "Cursed to Golf", "Roller Champions"],
        correctAnswer: 0,
      },
      {
        question: "Who won the African Cup of Nations in 2022?",
        options: ["Egypt", "Senegal", "Morocco", "Algeria"],
        correctAnswer: 1,
      },
      {
        question: "Which streaming platform produced a notable football documentary series in 2022?",
        options: ["Netflix - Sunderland 'Til I Die", "Amazon - All or Nothing", "HBO - The English Game", "Hulu - Welcome to Wrexham"],
        correctAnswer: 3,
      },
      {
        question: "Who was the highest-paid footballer in 2022?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappé", "Neymar Jr."],
        correctAnswer: 1,
      },
      {
        question: "Which experimental theater production explored sports culture in 2022?",
        options: ["The Inheritance", "Take Me Out", "Tina: The Tina Turner Musical", "Prima Facie"],
        correctAnswer: 1,
      },
      {
        question: "Who won the Copa Sudamericana in 2022?",
        options: ["Flamengo", "São Paulo", "Athletico Paranaense", "Independiente del Valle"],
        correctAnswer: 2,
      },
      {
        question: "Which indie film explored football culture in 2022?",
        options: ["The Phantom Goal", "Next Goal Wins", "Pelada", "United Passions"],
        correctAnswer: 1,
      },
      {
        question: "Which footballer broke the record for most World Cup goals in 2022?",
        options: ["Lionel Messi", "Kylian Mbappé", "Cristiano Ronaldo", "Miroslav Klose"],
        correctAnswer: 0,
      },
      {
        question: "Who won the UEFA Nations League in 2022?",
        options: ["France", "Spain", "Italy", "Portugal"],
        correctAnswer: 0,
      },
      {
        question: "Which football club won the most valuable team award in 2022?",
        options: ["Real Madrid", "Manchester United", "Barcelona", "Bayern Munich"],
        correctAnswer: 0,
      },
      {
        question: "Who was named the best young player at the 2022 World Cup?",
        options: ["Jude Bellingham", "Kylian Mbappé", "Enzo Fernández", "Pedri"],
        correctAnswer: 2,
      },
      {
        question: "Which experimental film explored the psychology of a football player?",
        options: ["The Damned United", "Goal!", "Looking for Eric", "After the Goal"],
        correctAnswer: 2,
      },
      {
        question: "Who won the African Footballer of the Year in 2022?",
        options: ["Sadio Mané", "Mohamed Salah", "Riyad Mahrez", "Edouard Mendy"],
        correctAnswer: 0,
      },
      {
        question: "Which video game introduced the most innovative football mechanics in 2022?",
        options: ["FIFA 23", "eFootball", "Football Manager 2023", "Pro Evolution Soccer"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the most critically acclaimed sports documentary in 2022?",
        options: ["Asif Kapadia", "Peter Berg", "Matthew Heineman", "Greg Whiteley"],
        correctAnswer: 3,
      },
      {
        question: "Which national team had the most impressive defensive record in 2022?",
        options: ["Brazil", "France", "Argentina", "Morocco"],
        correctAnswer: 3,
      },
      {
        question: "Who won the Copa America in 2022?",
        options: ["Brazil", "Argentina", "Colombia", "Uruguay"],
        correctAnswer: 1,
      },
      {
        question: "Which experimental music album referenced football culture most uniquely?",
        options: ["Bad Bunny - Un Verano Sin Ti", "Drake - Honestly, Nevermind", "The Weeknd - Dawn FM", "Rosalía - Motomami"],
        correctAnswer: 0,
      },
      {
        question: "Who was the most valuable player in the UEFA Champions League 2022?",
        options: ["Karim Benzema", "Kylian Mbappé", "Robert Lewandowski", "Mohamed Salah"],
        correctAnswer: 0,
      },
      {
        question: "Which indie game explored the most unique sports narrative in 2022?",
        options: ["Rollerdrome", "Windjammers 2", "Cursed to Golf", "Football Drama"],
        correctAnswer: 3,
      },
      {
        question: "Who won the Golden Glove at the 2022 World Cup?",
        options: ["Emiliano Martínez", "Thibaut Courtois", "Alisson Becker", "Hugo Lloris"],
        correctAnswer: 0,
      },
      {
        question: "Which streaming platform produced the most innovative sports documentary in 2022?",
        options: ["Netflix - Sunderland 'Til I Die", "Amazon - All or Nothing", "HBO - The English Game", "Hulu - Welcome to Wrexham"],
        correctAnswer: 3,
      },
      {
        question: "Who won the Puskas Award for best goal in 2022?",
        options: ["Sadio Mané", "Lionel Messi", "Richarlison", "Son Heung-min"],
        correctAnswer: 3,
      },
      {
        question: "Which experimental theater production explored sports culture most uniquely?",
        options: ["The Inheritance", "Take Me Out", "Tina: The Tina Turner Musical", "Sports Play"],
        correctAnswer: 3,
      },
      {
        question: "Who was the top scorer in the English Premier League in 2022?",
        options: ["Mohamed Salah", "Harry Kane", "Son Heung-min", "Erling Haaland"],
        correctAnswer: 3,
      },
      {
        question: "Which football club won the most trophies in 2022?",
        options: ["Manchester City", "Real Madrid", "Bayern Munich", "Paris Saint-Germain"],
        correctAnswer: 1,
      },
      {
        question: "Who won the South American Football Confederation (CONMEBOL) Libertadores in 2022?",
        options: ["Flamengo", "Palmeiras", "Athletico Paranaense", "Boca Juniors"],
        correctAnswer: 2,
      },
      {
        question: "Which documentary most comprehensively explored football culture in 2022?",
        options: ["The Last Dance", "Senna", "Diego Maradona", "All or Nothing: Manchester City"],
        correctAnswer: 3,
      },
      {
        question: "Who was named the best football commentator in 2022?",
        options: ["Peter Drury", "Martin Tyler", "Ray Hudson", "Jon Champion"],
        correctAnswer: 0,
      },
      {
        question: "Which football-related podcast gained the most popularity in 2022?",
        options: ["Football Weekly", "The Totally Football Show", "Men in Blazers", "The Athletic Football Podcast"],
        correctAnswer: 1,
      },
      {
        question: "Who won the most innovative football technology award in 2022?",
        options: ["VAR", "Goal-line technology", "Semi-automated offside technology", "Player tracking systems"],
        correctAnswer: 2,
      },
      {
        question: "Which football player launched the most successful charity initiative in 2022?",
        options: ["Marcus Rashford", "Sadio Mané", "Raheem Sterling", "Juan Mata"],
        correctAnswer: 0,
      },
      {
        question: "Who was the most followed football player on social media in 2022?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar Jr.", "Kylian Mbappé"],
        correctAnswer: 0,
      },
      {
        question: "Which football boot brand dominated the market in 2022?",
        options: ["Nike", "Adidas", "Puma", "New Balance"],
        correctAnswer: 0,
      },
      {
        question: "Who won the most innovative football training technology in 2022?",
        options: ["Catapult Sports", "STATSports", "PlayerMaker", "Kinexon"],
        correctAnswer: 1,
      },
      {
        question: "Which football analytics company made the biggest impact in 2022?",
        options: ["Opta", "Statsbomb", "Wyscout", "InStat"],
        correctAnswer: 1,
      },
      {
        question: "Who was the most valuable young footballer in 2022?",
        options: ["Erling Haaland", "Kylian Mbappé", "Pedri", "Jude Bellingham"],
        correctAnswer: 3,
      },
      {
        question: "Which football federation implemented the most progressive policies in 2022?",
        options: ["UEFA", "FIFA", "CONMEBOL", "AFC"],
        correctAnswer: 0,
      },
      {
        question: "Who won the most innovative football marketing campaign in 2022?",
        options: ["Nike", "Adidas", "Puma", "New Balance"],
        correctAnswer: 0,
      },
      {
        question: "Which football club had the most sustainable practices in 2022?",
        options: ["Forest Green Rovers", "Bayern Munich", "Barcelona", "Ajax"],
        correctAnswer: 0,
      },
      {
        question: "Who was the most influential football agent in 2022?",
        options: ["Jorge Mendes", "Mino Raiola", "Pini Zahavi", "Jonathan Barnett"],
        correctAnswer: 0,
      },
      {
        question: "Which football data visualization platform gained most traction in 2022?",
        options: ["Tableau", "Power BI", "Looker", "Sportlogiq"],
        correctAnswer: 3,
      },
      {
        question: "Who won the most innovative football media platform award in 2022?",
        options: ["The Athletic", "DAZN", "Amazon Prime Sports", "ESPN+"],
        correctAnswer: 0,
      },
      {
        question: "Which football esports tournament had the largest prize pool in 2022?",
        options: ["FIFA eWorld Cup", "PES League", "eFootball Championship", "EA Sports Global Series"],
        correctAnswer: 0,
      },
      {
        question: "Who was the most influential football journalist in 2022?",
        options: ["James Pearce", "Fabrizio Romano", "Miguel Delaney", "Sid Lowe"],
        correctAnswer: 1,
      },
      {
        question: "Which football club had the most innovative youth academy in 2022?",
        options: ["Ajax", "Barcelona", "Manchester City", "RB Leipzig"],
        correctAnswer: 2,
      },
      {
        question: "Who won the most progressive football governance award in 2022?",
        options: ["FIFA", "UEFA", "FIFPRO", "Football Supporters Europe"],
        correctAnswer: 3,
      },
      {
        question: "Which football-related blockchain project gained most attention in 2022?",
        options: ["Sorare", "Chiliz", "Socios", "Fan Tokens"],
        correctAnswer: 0,
      },
      {
        question: "Who was the most innovative football kit designer in 2022?",
        options: ["Nike", "Adidas", "Puma", "New Balance"],
        correctAnswer: 0,
      },
      {
        question: "Which football mental health initiative made the biggest impact in 2022?",
        options: ["Common Goal", "Heads Up", "Players Together", "Football Supports"],
        correctAnswer: 1,
      },
      {
        question: "Who won the most innovative football streaming platform award in 2022?",
        options: ["DAZN", "Amazon Prime Sports", "ESPN+", "Paramount+"],
        correctAnswer: 0,
      },
      {
        question: "Which football club had the most progressive social media strategy in 2022?",
        options: ["Manchester City", "Liverpool", "Real Madrid", "Barcelona"],
        correctAnswer: 0,
      },
      {
        question: "Which programming language was created by Guido van Rossum?",
        options: ["Java", "C++", "Python", "Ruby"],
        correctAnswer: 2,
      },
      {
        question: "What is the capital of New Zealand?",
        options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
        correctAnswer: 1,
      },
      {
        question: "What is the result of 7 × 8?",
        options: ["54", "56", "58", "60"],
        correctAnswer: 1,
      },
      {
        question: "Which element has the chemical symbol 'Au'?",
        options: ["Silver", "Gold", "Aluminum", "Copper"],
        correctAnswer: 1,
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: 2,
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: 1,
      },
      {
        question: "Which country is home to the Great Barrier Reef?",
        options: ["Brazil", "Indonesia", "Australia", "Mexico"],
        correctAnswer: 2,
      },
      {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
      },
      {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Franz Kafka"],
        correctAnswer: 1,
      },
      {
        question: "Which programming language is used for Android app development?",
        options: ["Swift", "Kotlin", "Java", "C#"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest desert in the world?",
        options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Arabian Desert"],
        correctAnswer: 2,
      },
      {
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        correctAnswer: 1,
      },
      {
        question: "Which river is the longest in the world?",
        options: ["Amazon River", "Mississippi River", "Yangtze River", "Nile River"],
        correctAnswer: 3,
      },
      {
        question: "Who discovered penicillin?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Jonas Salk"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correctAnswer: 3,
      },
      {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 2,
      },
      {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2,
      },
      {
        question: "Who composed the 'Moonlight Sonata'?",
        options: ["Mozart", "Beethoven", "Chopin", "Bach"],
        correctAnswer: 1,
      },
      {
        question: "Which country is the largest producer of coffee?",
        options: ["Colombia", "Vietnam", "Brazil", "Indonesia"],
        correctAnswer: 2,
      },
      {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "110°C", "80°C"],
        correctAnswer: 1,
      },
      {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Albert Einstein"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Brain", "Liver", "Skin"],
        correctAnswer: 3,
      },
      {
        question: "Which mountain is the tallest in the world?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount McKinley"],
        correctAnswer: 2,
      },
      {
        question: "What is the chemical formula for water?",
        options: ["CO2", "H2O", "NaCl", "O2"],
        correctAnswer: 1,
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: 2,
      },
      {
        question: "What is the speed of light?",
        options: ["299,792 kilometers per second", "150,000 kilometers per second", "200,000 kilometers per second", "250,000 kilometers per second"],
        correctAnswer: 0,
      },
      {
        question: "Who painted 'The Starry Night'?",
        options: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3,
      },
      {
        question: "Which element is the most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 2,
      },
      {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Stephen Hawking", "Albert Einstein", "Niels Bohr"],
        correctAnswer: 2,
      },
      {
        question: "What is the capital of South Africa?",
        options: ["Johannesburg", "Cape Town", "Pretoria", "Durban"],
        correctAnswer: 2,
      },
      {
        question: "Which programming language was created by Bjarne Stroustrup?",
        options: ["Java", "Python", "C++", "Ruby"],
        correctAnswer: 2,
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: 2,
      },
      {
        question: "Who discovered radioactivity?",
        options: ["Marie Curie", "Albert Einstein", "Isaac Newton", "Niels Bohr"],
        correctAnswer: 0,
      },
      {
        question: "What is the largest continent by area?",
        options: ["Africa", "North America", "Europe", "Asia"],
        correctAnswer: 3,
      },
      {
        question: "Which country is the world's largest democracy?",
        options: ["United States", "Russia", "India", "Brazil"],
        correctAnswer: 2,
      },
      {
        question: "What is the most widely spoken language in the world?",
        options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        correctAnswer: 2,
      },
      {
        question: "Who invented the World Wide Web?",
        options: ["Steve Jobs", "Bill Gates", "Tim Berners-Lee", "Mark Zuckerberg"],
        correctAnswer: 2,
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
        correctAnswer: 2,
      },
      {
        question: "Which element is liquid at room temperature?",
        options: ["Helium", "Mercury", "Bromine", "Chlorine"],
        correctAnswer: 1,
      },
      {
        question: "Who wrote 'The Prince'?",
        options: ["Aristotle", "Plato", "Machiavelli", "Socrates"],
        correctAnswer: 2,
      },
      {
        question: "What is the most common blood type?",
        options: ["AB+", "O-", "A+", "O+"],
        correctAnswer: 3,
      },
      {
        question: "Which country invented tea?",
        options: ["Japan", "India", "China", "England"],
        correctAnswer: 2,
      },
            {
              question: "Who directed the movie 'The Shawshank Redemption'?",
              options: ["Steven Spielberg", "Frank Darabont", "Martin Scorsese", "Christopher Nolan"],
              correctAnswer: 1,
            },
            {
              question: "Which actor played the role of Neo in 'The Matrix'?",
              options: ["Keanu Reeves", "Tom Cruise", "Brad Pitt", "Will Smith"],
              correctAnswer: 0,
            },
            {
              question: "What is the highest-grossing animated movie of all time?",
              options: ["Frozen", "The Lion King (2019)", "Toy Story 4", "Incredibles 2"],
              correctAnswer: 1,
            },
            {
              question: "Which movie won the Academy Award for Best Picture in 2023?",
              options: ["Everything Everywhere All at Once", "The Fabelmans", "Top Gun: Maverick", "All Quiet on the Western Front"],
              correctAnswer: 0,
            },
            {
              question: "Who played the Joker in 'The Dark Knight'?",
              options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"],
              correctAnswer: 1,
            },
            {
              question: "Which TV show features the character Walter White?",
              options: ["Breaking Bad", "The Sopranos", "Better Call Saul", "Narcos"],
              correctAnswer: 0,
            },
            {
              question: "Who created the TV series 'Stranger Things'?",
              options: ["The Duffer Brothers", "Ryan Murphy", "Shonda Rhimes", "Vince Gilligan"],
              correctAnswer: 0,
            },
            {
              question: "Which TV show is known for the phrase 'Winter is Coming'?",
              options: ["The Witcher", "Game of Thrones", "Vikings", "The Last Kingdom"],
              correctAnswer: 1,
            },
            {
              question: "Who played the character Sheldon Cooper in 'The Big Bang Theory'?",
              options: ["Jim Parsons", "Johnny Galecki", "Kaley Cuoco", "Simon Helberg"],
              correctAnswer: 0,
            },
            {
              question: "Which TV show is about a group of friends living in New York City?",
              options: ["How I Met Your Mother", "Friends", "Seinfeld", "The Office"],
              correctAnswer: 1,
            },
            {
              question: "Which singer is known as the 'Queen of Pop'?",
              options: ["Madonna", "Lady Gaga", "Beyoncé", "Taylor Swift"],
              correctAnswer: 0,
            },
            {
              question: "Which band performed the song 'Bohemian Rhapsody'?",
              options: ["The Beatles", "Led Zeppelin", "Queen", "The Rolling Stones"],
              correctAnswer: 2,
            },
            {
              question: "Who won the Grammy for Album of the Year in 2023?",
              options: ["Harry Styles", "Beyoncé", "Lizzo", "Bad Bunny"],
              correctAnswer: 1,
            },
            {
              question: "Which artist released the album 'Midnights' in 2022?",
              options: ["Taylor Swift", "Adele", "Billie Eilish", "Olivia Rodrigo"],
              correctAnswer: 0,
            },
            {
              question: "Which song is known as the anthem of the 2018 FIFA World Cup?",
              options: ["Waka Waka", "Live It Up", "We Are One", "La La La"],
              correctAnswer: 1,
            },
            {
              question: "Which country won the FIFA World Cup in 2022?",
              options: ["France", "Brazil", "Argentina", "Germany"],
              correctAnswer: 2,
            },
            {
              question: "Who is the all-time top scorer in the UEFA Champions League?",
              options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"],
              correctAnswer: 1,
            },
            {
              question: "Which team won the NBA Championship in 2023?",
              options: ["Golden State Warriors", "Los Angeles Lakers", "Milwaukee Bucks", "Denver Nuggets"],
              correctAnswer: 3,
            },
            {
              question: "Who is known as the 'King of Pop'?",
              options: ["Michael Jackson", "Prince", "Elvis Presley", "Whitney Houston"],
              correctAnswer: 0,
            },
            {
              question: "Which athlete has won the most Olympic gold medals?",
              options: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Carl Lewis"],
              correctAnswer: 1,
            },
            {
              question: "Which social media platform introduced 'Reels'?",
              options: ["Instagram", "TikTok", "Snapchat", "Facebook"],
              correctAnswer: 0,
            },
            {
              question: "Who is the most followed person on Instagram?",
              options: ["Cristiano Ronaldo", "Kylie Jenner", "Selena Gomez", "Dwayne Johnson"],
              correctAnswer: 0,
            },
            {
              question: "Which TikTok creator is known for the 'Renegade' dance?",
              options: ["Charli D'Amelio", "Addison Rae", "Jalaiah Harmon", "Bella Poarch"],
              correctAnswer: 2,
            },
            {
              question: "Which YouTuber is known for the 'MrBeast' channel?",
              options: ["Jimmy Donaldson", "PewDiePie", "Markiplier", "Logan Paul"],
              correctAnswer: 0,
            },
            {
              question: "Which social media platform was rebranded as 'X' in 2023?",
              options: ["Twitter", "Facebook", "Instagram", "Snapchat"],
              correctAnswer: 0,
            },
            {
              question: "Which celebrity is known for the 'Keeping Up with the Kardashians' reality show?",
              options: ["Kim Kardashian", "Kylie Jenner", "Khloé Kardashian", "Kourtney Kardashian"],
              correctAnswer: 0,
            },
            {
              question: "Who is the highest-paid actor in 2023?",
              options: ["Dwayne Johnson", "Tom Cruise", "Robert Downey Jr.", "Will Smith"],
              correctAnswer: 0,
            },
            {
              question: "Which actress played the role of Black Widow in the Marvel Cinematic Universe?",
              options: ["Scarlett Johansson", "Elizabeth Olsen", "Brie Larson", "Gal Gadot"],
              correctAnswer: 0,
            },
            {
              question: "Who is the creator of the 'Harry Potter' book series?",
              options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
              correctAnswer: 0,
            },
            {
              question: "Which movie features the character Tony Montana?",
              options: ["Scarface", "The Godfather", "Goodfellas", "Casino"],
              correctAnswer: 0,
            },
            {
              question: "Which TV show is set in the fictional town of Hawkins?",
              options: ["Stranger Things", "Riverdale", "Twin Peaks", "The Umbrella Academy"],
              correctAnswer: 0,
            },
            {
              question: "Which singer is known for the album 'Lemonade'?",
              options: ["Beyoncé", "Rihanna", "Taylor Swift", "Adele"],
              correctAnswer: 0,
            },
            {
              question: "Which movie won the Golden Globe for Best Motion Picture – Drama in 2023?",
              options: ["The Fabelmans", "Top Gun: Maverick", "Elvis", "Everything Everywhere All at Once"],
              correctAnswer: 0,
            },
            {
              question: "Which actor played the role of Iron Man in the Marvel Cinematic Universe?",
              options: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
              correctAnswer: 0,
            },
            {
              question: "Which TV show is about a group of survivors in a zombie apocalypse?",
              options: ["The Walking Dead", "Fear the Walking Dead", "Z Nation", "Black Summer"],
              correctAnswer: 0,
            },
            {
              question: "Which singer is known for the song 'Shape of You'?",
              options: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Post Malone"],
              correctAnswer: 0,
            },
            {
              question: "Which movie features the character Jack Sparrow?",
              options: ["Pirates of the Caribbean", "The Curse of the Black Pearl", "On Stranger Tides", "Dead Men Tell No Tales"],
              correctAnswer: 0,
            },
            {
              question: "Which TV show is about a high school chemistry teacher turned meth producer?",
              options: ["Breaking Bad", "Better Call Saul", "Narcos", "Ozark"],
              correctAnswer: 0,
            },
            {
              question: "Which singer is known for the album '25'?",
              options: ["Adele", "Taylor Swift", "Beyoncé", "Rihanna"],
              correctAnswer: 0,
            },
            {
              question: "Which movie features the character Forrest Gump?",
              options: ["Forrest Gump", "The Green Mile", "Cast Away", "Saving Private Ryan"],
              correctAnswer: 0,
            },
            {
              question: "Which TV show is about a group of friends living in New York City?",
              options: ["Friends", "How I Met Your Mother", "Seinfeld", "The Office"],
              correctAnswer: 0,
            },
            {
              question: "Which singer is known for the song 'Blinding Lights'?",
              options: ["The Weeknd", "Post Malone", "Drake", "Justin Bieber"],
              correctAnswer: 0,
            },
            {
              question: "Which movie features the character Hannibal Lecter?",
              options: ["The Silence of the Lambs", "Hannibal", "Red Dragon", "Manhunter"],
              correctAnswer: 0,
            },
            {
              question: "Which TV show is about a group of survivors on a mysterious island?",
              options: ["Lost", "The 100", "Survivor", "The Wilds"],
              correctAnswer: 0,
            },
            {
              question: "Which singer is known for the song 'Rolling in the Deep'?",
              options: ["Adele", "Taylor Swift", "Beyoncé", "Rihanna"],
              correctAnswer: 0,
            },
            {
              question: "Which movie features the character Rocky Balboa?",
              options: ["Rocky", "Creed", "Raging Bull", "The Fighter"],
              correctAnswer: 0,
            },
            {
              question: "Which TV show is about a group of doctors working in a hospital?",
              options: ["Grey's Anatomy", "House", "ER", "The Good Doctor"],
              correctAnswer: 0,
            },
            {
              question: "Which singer is known for the song 'Uptown Funk'?",
              options: ["Bruno Mars", "Mark Ronson", "Pharrell Williams", "Justin Timberlake"],
              correctAnswer: 1,
            },
            {
              question: "Which movie features the character Katniss Everdeen?",
              options: ["The Hunger Games", "Divergent", "The Maze Runner", "The Giver"],
              correctAnswer: 0,
            },
            {
              question: "Which TV show is about a group of friends living in Philadelphia?",
              options: ["It's Always Sunny in Philadelphia", "The Office", "Parks and Recreation", "Brooklyn Nine-Nine"],
              correctAnswer: 0,
            },
                  {
                    question: "Who directed the 2023 film 'Oppenheimer'?",
                    options: ["Christopher Nolan", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which actor played the lead role in the 2023 film 'Killers of the Flower Moon'?",
                    options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Hardy", "Robert Downey Jr."],
                    correctAnswer: 0,
                  },
                  {
                    question: "What is the highest-grossing film of 2023?",
                    options: ["Avatar: The Way of Water", "The Super Mario Bros. Movie", "Guardians of the Galaxy Vol. 3", "Spider-Man: Across the Spider-Verse"],
                    correctAnswer: 1,
                  },
                  {
                    question: "Which actress won the Academy Award for Best Actress in 2023?",
                    options: ["Cate Blanchett", "Michelle Yeoh", "Emma Stone", "Margot Robbie"],
                    correctAnswer: 1,
                  },
                  {
                    question: "Which film won the Academy Award for Best Picture in 2023?",
                    options: ["Everything Everywhere All at Once", "The Fabelmans", "Top Gun: Maverick", "All Quiet on the Western Front"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who played the role of Elvis Presley in the 2022 biopic 'Elvis'?",
                    options: ["Austin Butler", "Harry Styles", "Timothée Chalamet", "Ansel Elgort"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which animated film won the Academy Award for Best Animated Feature in 2023?",
                    options: ["Turning Red", "Guillermo del Toro's Pinocchio", "Puss in Boots: The Last Wish", "Marcel the Shell with Shoes On"],
                    correctAnswer: 1,
                  },
                  {
                    question: "Who directed the 2023 film 'Barbie'?",
                    options: ["Greta Gerwig", "Sofia Coppola", "Patty Jenkins", "Kathryn Bigelow"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which actor played the villain in the 2023 film 'The Little Mermaid'?",
                    options: ["Javier Bardem", "Jude Law", "Mel Gibson", "Joaquin Phoenix"],
                    correctAnswer: 1,
                  },
                  {
                    question: "Which film won the Golden Globe for Best Motion Picture – Drama in 2023?",
                    options: ["The Fabelmans", "Tár", "Elvis", "Top Gun: Maverick"],
                    correctAnswer: 1,
                  },
                  {
                    question: "Who won the Academy Award for Best Actor in 2023?",
                    options: ["Brendan Fraser", "Austin Butler", "Colin Farrell", "Paul Mescal"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Palme d'Or at the 2023 Cannes Film Festival?",
                    options: ["Anatomy of a Fall", "Triangle of Sadness", "Decision to Leave", "Close"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who directed the 2023 film 'The Killer'?",
                    options: ["David Fincher", "Denis Villeneuve", "Christopher Nolan", "Quentin Tarantino"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the BAFTA Award for Best Film in 2023?",
                    options: ["All Quiet on the Western Front", "The Banshees of Inisherin", "Everything Everywhere All at Once", "Elvis"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who played the role of Princess Diana in the 2023 film 'Spencer'?",
                    options: ["Kristen Stewart", "Emma Corrin", "Naomi Watts", "Charlize Theron"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best International Feature Film in 2023?",
                    options: ["All Quiet on the Western Front", "Decision to Leave", "Close", "Argentina, 1985"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who directed the 2023 film 'Dune: Part Two'?",
                    options: ["Denis Villeneuve", "Christopher Nolan", "Ridley Scott", "James Cameron"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Golden Globe for Best Motion Picture – Musical or Comedy in 2023?",
                    options: ["The Banshees of Inisherin", "Everything Everywhere All at Once", "Glass Onion: A Knives Out Mystery", "Babylon"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who played the role of Batman in the 2023 film 'The Flash'?",
                    options: ["Michael Keaton", "Ben Affleck", "Christian Bale", "Robert Pattinson"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Original Screenplay in 2023?",
                    options: ["Everything Everywhere All at Once", "The Banshees of Inisherin", "Tár", "The Fabelmans"],
                    correctAnswer: 1,
                  },
                  {
                    question: "Who directed the 2023 film 'The Zone of Interest'?",
                    options: ["Jonathan Glazer", "Yorgos Lanthimos", "Wes Anderson", "Paul Thomas Anderson"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Documentary Feature in 2023?",
                    options: ["Navalny", "All That Breathes", "Fire of Love", "The Territory"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who played the role of Willy Wonka in the 2023 film 'Wonka'?",
                    options: ["Timothée Chalamet", "Ryan Gosling", "Tom Holland", "Ansel Elgort"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Visual Effects in 2023?",
                    options: ["Avatar: The Way of Water", "Top Gun: Maverick", "The Batman", "Doctor Strange in the Multiverse of Madness"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who directed the 2023 film 'Past Lives'?",
                    options: ["Celine Song", "Greta Gerwig", "Sofia Coppola", "Lulu Wang"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Cinematography in 2023?",
                    options: ["All Quiet on the Western Front", "Elvis", "Tár", "The Banshees of Inisherin"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who played the role of Cleopatra in the 2023 film 'Cleopatra'?",
                    options: ["Gal Gadot", "Angelina Jolie", "Scarlett Johansson", "Margot Robbie"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Costume Design in 2023?",
                    options: ["Black Panther: Wakanda Forever", "Elvis", "Everything Everywhere All at Once", "Babylon"],
                    correctAnswer: 1,
                  },
                  {
                    question: "Who directed the 2023 film 'The Holdovers'?",
                    options: ["Alexander Payne", "Wes Anderson", "Richard Linklater", "Noah Baumbach"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Sound in 2023?",
                    options: ["Top Gun: Maverick", "All Quiet on the Western Front", "The Batman", "Elvis"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who played the role of Napoleon Bonaparte in the 2023 film 'Napoleon'?",
                    options: ["Joaquin Phoenix", "Christian Bale", "Michael Fassbender", "Adam Driver"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Film Editing in 2023?",
                    options: ["Everything Everywhere All at Once", "Top Gun: Maverick", "Elvis", "The Banshees of Inisherin"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who directed the 2023 film 'The Killer'?",
                    options: ["David Fincher", "Denis Villeneuve", "Christopher Nolan", "Quentin Tarantino"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Makeup and Hairstyling in 2023?",
                    options: ["The Whale", "Elvis", "Black Panther: Wakanda Forever", "Everything Everywhere All at Once"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who played the role of the Joker in the 2023 film 'Joker: Folie à Deux'?",
                    options: ["Joaquin Phoenix", "Jared Leto", "Heath Ledger", "Jack Nicholson"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Production Design in 2023?",
                    options: ["All Quiet on the Western Front", "Babylon", "Elvis", "Everything Everywhere All at Once"],
                    correctAnswer: 1,
                  },
                  {
                    question: "Who directed the 2023 film 'The Zone of Interest'?",
                    options: ["Jonathan Glazer", "Yorgos Lanthimos", "Wes Anderson", "Paul Thomas Anderson"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Original Score in 2023?",
                    options: ["All Quiet on the Western Front", "Babylon", "The Fabelmans", "Everything Everywhere All at Once"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who played the role of the Flash in the 2023 film 'The Flash'?",
                    options: ["Ezra Miller", "Grant Gustin", "Michael Keaton", "Ben Affleck"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Adapted Screenplay in 2023?",
                    options: ["Women Talking", "All Quiet on the Western Front", "Glass Onion: A Knives Out Mystery", "Living"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who directed the 2023 film 'The Holdovers'?",
                    options: ["Alexander Payne", "Wes Anderson", "Richard Linklater", "Noah Baumbach"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Animated Short Film in 2023?",
                    options: ["The Boy, the Mole, the Fox and the Horse", "Ice Merchants", "My Year of Dicks", "An Ostrich Told Me the World Is Fake and I Think I Believe It"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who played the role of the Riddler in the 2023 film 'The Batman'?",
                    options: ["Paul Dano", "Colin Farrell", "Zoe Kravitz", "Robert Pattinson"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Live Action Short Film in 2023?",
                    options: ["An Irish Goodbye", "Le Pupille", "The Red Suitcase", "Night Ride"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who directed the 2023 film 'The Killer'?",
                    options: ["David Fincher", "Denis Villeneuve", "Christopher Nolan", "Quentin Tarantino"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best Documentary Short Film in 2023?",
                    options: ["The Elephant Whisperers", "Haulout", "How Do You Measure a Year?", "Stranger at the Gate"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Who played the role of Catwoman in the 2023 film 'The Batman'?",
                    options: ["Zoe Kravitz", "Anne Hathaway", "Michelle Pfeiffer", "Halle Berry"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which film won the Academy Award for Best International Feature Film in 2023?",
                    options: ["All Quiet on the Western Front", "Decision to Leave", "Close", "Argentina, 1985"],
                    correctAnswer: 0,
                  },
                  {
                    question: "Which country won the 2022 FIFA World Cup?",
                          options: ["Argentina", "France", "Brazil", "Germany"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who won the Golden Boot at the 2022 FIFA World Cup?",
                          options: ["Kylian Mbappé", "Lionel Messi", "Olivier Giroud", "Julian Alvarez"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which club won the UEFA Champions League in 2023?",
                          options: ["Manchester City", "Real Madrid", "Bayern Munich", "Chelsea"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who won the Ballon d'Or in 2023?",
                          options: ["Lionel Messi", "Kylian Mbappé", "Erling Haaland", "Karim Benzema"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which player scored the fastest hat-trick in Premier League history?",
                          options: ["Sadio Mané", "Mohamed Salah", "Erling Haaland", "Son Heung-min"],
                          correctAnswer: 2,
                        },
                        {
                          question: "Which team won the 2023 Africa Cup of Nations?",
                          options: ["Senegal", "Egypt", "Nigeria", "Morocco"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer in the UEFA Champions League?",
                          options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Raúl"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which player has the most assists in Premier League history?",
                          options: ["Ryan Giggs", "Cesc Fàbregas", "Kevin De Bruyne", "Frank Lampard"],
                          correctAnswer: 2,
                        },
                        {
                          question: "Which country won the 2023 Copa América?",
                          options: ["Argentina", "Brazil", "Uruguay", "Colombia"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who won the Golden Glove at the 2022 FIFA World Cup?",
                          options: ["Emiliano Martínez", "Thibaut Courtois", "Manuel Neuer", "Alisson Becker"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which club has won the most UEFA Champions League titles?",
                          options: ["Real Madrid", "AC Milan", "Bayern Munich", "Liverpool"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the youngest player to score in a FIFA World Cup final?",
                          options: ["Pelé", "Kylian Mbappé", "Lionel Messi", "Diego Maradona"],
                          correctAnswer: 1,
                        },
                        {
                          question: "Which player has the most goals in a single Premier League season?",
                          options: ["Mohamed Salah", "Alan Shearer", "Erling Haaland", "Thierry Henry"],
                          correctAnswer: 2,
                        },
                        {
                          question: "Which country won the 2023 UEFA Nations League?",
                          options: ["Spain", "France", "Italy", "Portugal"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer for the Brazilian national team?",
                          options: ["Pelé", "Neymar", "Ronaldo", "Romário"],
                          correctAnswer: 1,
                        },
                        {
                          question: "Which club won the 2023 FA Cup?",
                          options: ["Manchester City", "Manchester United", "Chelsea", "Liverpool"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the most expensive football transfer of all time?",
                          options: ["Neymar", "Kylian Mbappé", "Philippe Coutinho", "Paul Pogba"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which player has the most caps for the Spanish national team?",
                          options: ["Sergio Ramos", "Iker Casillas", "Xavi", "Andrés Iniesta"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which country won the 2023 CONCACAF Gold Cup?",
                          options: ["United States", "Mexico", "Canada", "Costa Rica"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer in the English Premier League?",
                          options: ["Alan Shearer", "Wayne Rooney", "Harry Kane", "Thierry Henry"],
                          correctAnswer: 2,
                        },
                        {
                          question: "Which player has won the most FIFA World Cup titles?",
                          options: ["Pelé", "Lionel Messi", "Cristiano Ronaldo", "Diego Maradona"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which club won the 2023 UEFA Europa League?",
                          options: ["Sevilla", "Manchester United", "Roma", "Bayer Leverkusen"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer for the French national team?",
                          options: ["Thierry Henry", "Olivier Giroud", "Antoine Griezmann", "Kylian Mbappé"],
                          correctAnswer: 1,
                        },
                        {
                          question: "Which country won the 2023 Asian Cup?",
                          options: ["Japan", "South Korea", "Qatar", "Iran"],
                          correctAnswer: 2,
                        },
                        {
                          question: "Who is the most capped player in FIFA World Cup history?",
                          options: ["Lionel Messi", "Cristiano Ronaldo", "Lothar Matthäus", "Paolo Maldini"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which club won the 2023 Serie A title?",
                          options: ["Napoli", "AC Milan", "Inter Milan", "Juventus"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer for the German national team?",
                          options: ["Miroslav Klose", "Gerd Müller", "Thomas Müller", "Lukas Podolski"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which country won the 2023 FIFA Women's World Cup?",
                          options: ["Spain", "United States", "England", "Germany"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer in the UEFA European Championship?",
                          options: ["Cristiano Ronaldo", "Michel Platini", "Antoine Griezmann", "Alan Shearer"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which club won the 2023 Bundesliga title?",
                          options: ["Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer for the English national team?",
                          options: ["Wayne Rooney", "Harry Kane", "Gary Lineker", "Michael Owen"],
                          correctAnswer: 1,
                        },
                        {
                          question: "Which country won the 2023 FIFA Club World Cup?",
                          options: ["Manchester City", "Real Madrid", "Al Hilal", "Flamengo"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer in the Copa Libertadores?",
                          options: ["Alberto Spencer", "Gabriel Barbosa", "Juan Román Riquelme", "Neymar"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which club won the 2023 Ligue 1 title?",
                          options: ["Paris Saint-Germain", "Lille", "Monaco", "Marseille"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer for the Italian national team?",
                          options: ["Luigi Riva", "Roberto Baggio", "Alessandro Del Piero", "Ciro Immobile"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which country won the 2023 FIFA U-20 World Cup?",
                          options: ["Uruguay", "Brazil", "Argentina", "France"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer in the FIFA Women's World Cup?",
                          options: ["Marta", "Abby Wambach", "Birgit Prinz", "Mia Hamm"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which club won the 2023 MLS Cup?",
                          options: ["Los Angeles FC", "Seattle Sounders", "New York City FC", "Atlanta United"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer for the Portuguese national team?",
                          options: ["Cristiano Ronaldo", "Pauleta", "Eusébio", "Luís Figo"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which country won the 2023 FIFA Beach Soccer World Cup?",
                          options: ["Brazil", "Portugal", "Russia", "Japan"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer in the FIFA Confederations Cup?",
                          options: ["Ronaldinho", "Neymar", "Luis Suárez", "Fernando Torres"],
                          correctAnswer: 3,
                        },
                        {
                          question: "Which club won the 2023 AFC Champions League?",
                          options: ["Al Hilal", "Urawa Red Diamonds", "Persepolis", "Jeonbuk Hyundai Motors"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer for the Dutch national team?",
                          options: ["Robin van Persie", "Ruud van Nistelrooy", "Dennis Bergkamp", "Johan Cruyff"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which country won the 2023 FIFA Futsal World Cup?",
                          options: ["Brazil", "Spain", "Argentina", "Portugal"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer in the FIFA U-17 World Cup?",
                          options: ["Florent Sinama Pongolle", "Carlos Vela", "Neymar", "Victor Osimhen"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which club won the 2023 CAF Champions League?",
                          options: ["Al Ahly", "Wydad Casablanca", "Mamelodi Sundowns", "Esperance de Tunis"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer for the Belgian national team?",
                          options: ["Romelu Lukaku", "Eden Hazard", "Kevin De Bruyne", "Jan Ceulemans"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Which country won the 2023 FIFA U-20 Women's World Cup?",
                          options: ["Spain", "Japan", "United States", "Germany"],
                          correctAnswer: 0,
                        },
                        {
                          question: "Who is the all-time top scorer in the FIFA Club World Cup?",
                          options: ["Lionel Messi", "Cristiano Ronaldo", "Gareth Bale", "Luis Suárez"],
                          correctAnswer: 1,
                        },
                              {
                                question: "Which player has the most goals in a single UEFA Champions League season?",
                                options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Erling Haaland"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which country won the 2023 FIFA Women's World Cup Golden Boot?",
                                options: ["Spain", "Japan", "England", "Sweden"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer in the FIFA World Cup?",
                                options: ["Miroslav Klose", "Ronaldo", "Gerd Müller", "Just Fontaine"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which club won the 2023 UEFA Super Cup?",
                                options: ["Manchester City", "Sevilla", "Real Madrid", "Bayern Munich"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the youngest player to win the FIFA World Cup?",
                                options: ["Pelé", "Kylian Mbappé", "Lionel Messi", "Diego Maradona"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which country won the 2023 FIFA U-17 World Cup?",
                                options: ["Germany", "Brazil", "France", "Spain"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer in the English FA Cup?",
                                options: ["Ian Rush", "Thierry Henry", "Alan Shearer", "Harry Kane"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which player has the most assists in a single Premier League season?",
                                options: ["Thierry Henry", "Kevin De Bruyne", "Cesc Fàbregas", "Ryan Giggs"],
                                correctAnswer: 1,
                              },
                              {
                                question: "Which country won the 2023 FIFA Beach Soccer World Cup?",
                                options: ["Brazil", "Portugal", "Russia", "Japan"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer in the FIFA Confederations Cup?",
                                options: ["Ronaldinho", "Neymar", "Luis Suárez", "Fernando Torres"],
                                correctAnswer: 3,
                              },
                              {
                                question: "Which club won the 2023 AFC Champions League?",
                                options: ["Al Hilal", "Urawa Red Diamonds", "Persepolis", "Jeonbuk Hyundai Motors"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer for the Dutch national team?",
                                options: ["Robin van Persie", "Ruud van Nistelrooy", "Dennis Bergkamp", "Johan Cruyff"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which country won the 2023 FIFA Futsal World Cup?",
                                options: ["Brazil", "Spain", "Argentina", "Portugal"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer in the FIFA U-17 World Cup?",
                                options: ["Florent Sinama Pongolle", "Carlos Vela", "Neymar", "Victor Osimhen"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which club won the 2023 CAF Champions League?",
                                options: ["Al Ahly", "Wydad Casablanca", "Mamelodi Sundowns", "Esperance de Tunis"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer for the Belgian national team?",
                                options: ["Romelu Lukaku", "Eden Hazard", "Kevin De Bruyne", "Jan Ceulemans"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which country won the 2023 FIFA U-20 Women's World Cup?",
                                options: ["Spain", "Japan", "United States", "Germany"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer in the FIFA Club World Cup?",
                                options: ["Lionel Messi", "Cristiano Ronaldo", "Gareth Bale", "Luis Suárez"],
                                correctAnswer: 1,
                              },
                              {
                                question: "Which club won the 2023 Copa Libertadores?",
                                options: ["Flamengo", "Palmeiras", "River Plate", "Boca Juniors"],
                                correctAnswer: 1,
                              },
                              {
                                question: "Who is the all-time top scorer in the FIFA Women's World Cup?",
                                options: ["Marta", "Abby Wambach", "Birgit Prinz", "Mia Hamm"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which country won the 2023 FIFA U-20 World Cup?",
                                options: ["Uruguay", "Brazil", "Argentina", "France"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer for the Italian national team?",
                                options: ["Luigi Riva", "Roberto Baggio", "Alessandro Del Piero", "Ciro Immobile"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which club won the 2023 Ligue 1 title?",
                                options: ["Paris Saint-Germain", "Lille", "Monaco", "Marseille"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer in the Copa Libertadores?",
                                options: ["Alberto Spencer", "Gabriel Barbosa", "Juan Román Riquelme", "Neymar"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which country won the 2023 FIFA Club World Cup?",
                                options: ["Manchester City", "Real Madrid", "Al Hilal", "Flamengo"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer for the English national team?",
                                options: ["Wayne Rooney", "Harry Kane", "Gary Lineker", "Michael Owen"],
                                correctAnswer: 1,
                              },
                              {
                                question: "Which club won the 2023 Bundesliga title?",
                                options: ["Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer in the UEFA European Championship?",
                                options: ["Cristiano Ronaldo", "Michel Platini", "Antoine Griezmann", "Alan Shearer"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which country won the 2023 FIFA Women's World Cup?",
                                options: ["Spain", "United States", "England", "Germany"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer for the German national team?",
                                options: ["Miroslav Klose", "Gerd Müller", "Thomas Müller", "Lukas Podolski"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which club won the 2023 Serie A title?",
                                options: ["Napoli", "AC Milan", "Inter Milan", "Juventus"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the most capped player in FIFA World Cup history?",
                                options: ["Lionel Messi", "Cristiano Ronaldo", "Lothar Matthäus", "Paolo Maldini"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which country won the 2023 Asian Cup?",
                                options: ["Japan", "South Korea", "Qatar", "Iran"],
                                correctAnswer: 2,
                              },
                              {
                                question: "Who is the all-time top scorer for the French national team?",
                                options: ["Thierry Henry", "Olivier Giroud", "Antoine Griezmann", "Kylian Mbappé"],
                                correctAnswer: 1,
                              },
                              {
                                question: "Which club won the 2023 UEFA Europa League?",
                                options: ["Sevilla", "Manchester United", "Roma", "Bayer Leverkusen"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer in the FIFA World Cup?",
                                options: ["Miroslav Klose", "Ronaldo", "Gerd Müller", "Just Fontaine"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which country won the 2023 CONCACAF Gold Cup?",
                                options: ["United States", "Mexico", "Canada", "Costa Rica"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the most capped player for the Spanish national team?",
                                options: ["Sergio Ramos", "Iker Casillas", "Xavi", "Andrés Iniesta"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which club won the 2023 FA Cup?",
                                options: ["Manchester City", "Manchester United", "Chelsea", "Liverpool"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer for the Brazilian national team?",
                                options: ["Pelé", "Neymar", "Ronaldo", "Romário"],
                                correctAnswer: 1,
                              },
                              {
                                question: "Which country won the 2023 UEFA Nations League?",
                                options: ["Spain", "France", "Italy", "Portugal"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the youngest player to score in a FIFA World Cup final?",
                                options: ["Pelé", "Kylian Mbappé", "Lionel Messi", "Diego Maradona"],
                                correctAnswer: 1,
                              },
                              {
                                question: "Which club has won the most UEFA Champions League titles?",
                                options: ["Real Madrid", "AC Milan", "Bayern Munich", "Liverpool"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who won the Golden Glove at the 2022 FIFA World Cup?",
                                options: ["Emiliano Martínez", "Thibaut Courtois", "Manuel Neuer", "Alisson Becker"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which country won the 2023 Copa América?",
                                options: ["Argentina", "Brazil", "Uruguay", "Colombia"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer in the UEFA Champions League?",
                                options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Raúl"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Which team won the 2023 Africa Cup of Nations?",
                                options: ["Senegal", "Egypt", "Nigeria", "Morocco"],
                                correctAnswer: 0,
                              },
                              {
                                question: "Who is the all-time top scorer in the Premier League?",
                                options: ["Alan Shearer", "Wayne Rooney", "Harry Kane", "Thierry Henry"],
                                correctAnswer: 2,
                              },
                              {
                                question: "Which country won the 2022 FIFA World Cup?",
                                options: ["Argentina", "France", "Brazil", "Germany"],
                                correctAnswer: 0,
                              },
                                    {
                                      question: "Who directed the 2023 film 'Barbie'?",
                                      options: ["Greta Gerwig", "Sofia Coppola", "Patty Jenkins", "Kathryn Bigelow"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which TV show won the Emmy for Best Drama Series in 2023?",
                                      options: ["Succession", "The Crown", "Stranger Things", "The Last of Us"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the Grammy for Album of the Year in 2023?",
                                      options: ["Beyoncé", "Harry Styles", "Taylor Swift", "Adele"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which social media platform launched 'Threads' in 2023?",
                                      options: ["Twitter", "Facebook", "Instagram", "TikTok"],
                                      correctAnswer: 2,
                                    },
                                    {
                                      question: "Who won the Ballon d'Or in 2023?",
                                      options: ["Lionel Messi", "Kylian Mbappé", "Erling Haaland", "Karim Benzema"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which actor played the lead role in the 2023 film 'Oppenheimer'?",
                                      options: ["Cillian Murphy", "Leonardo DiCaprio", "Brad Pitt", "Tom Hardy"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which country won the 2023 FIFA Women's World Cup?",
                                      options: ["Spain", "United States", "England", "Germany"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who is the most followed person on Instagram in 2023?",
                                      options: ["Cristiano Ronaldo", "Kylie Jenner", "Lionel Messi", "Selena Gomez"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which film won the Academy Award for Best Picture in 2023?",
                                      options: ["Everything Everywhere All at Once", "The Fabelmans", "Top Gun: Maverick", "All Quiet on the Western Front"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the Golden Boot at the 2022 FIFA World Cup?",
                                      options: ["Kylian Mbappé", "Lionel Messi", "Olivier Giroud", "Julian Alvarez"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which musician released the album 'Midnights' in 2022?",
                                      options: ["Taylor Swift", "Beyoncé", "Adele", "Billie Eilish"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which TV show features the character 'Wednesday Addams'?",
                                      options: ["Wednesday", "Stranger Things", "The Addams Family", "Chilling Adventures of Sabrina"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the FIFA Best Men's Player award in 2023?",
                                      options: ["Lionel Messi", "Kylian Mbappé", "Erling Haaland", "Karim Benzema"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which film won the Golden Globe for Best Motion Picture – Drama in 2023?",
                                      options: ["The Fabelmans", "Tár", "Elvis", "Top Gun: Maverick"],
                                      correctAnswer: 1,
                                    },
                                    {
                                      question: "Who is the most streamed artist on Spotify in 2023?",
                                      options: ["Bad Bunny", "Taylor Swift", "Drake", "The Weeknd"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which club won the UEFA Champions League in 2023?",
                                      options: ["Manchester City", "Real Madrid", "Bayern Munich", "Chelsea"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who played the role of Elvis Presley in the 2022 biopic 'Elvis'?",
                                      options: ["Austin Butler", "Harry Styles", "Timothée Chalamet", "Ansel Elgort"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which country won the 2023 Copa América?",
                                      options: ["Argentina", "Brazil", "Uruguay", "Colombia"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the Academy Award for Best Actor in 2023?",
                                      options: ["Brendan Fraser", "Austin Butler", "Colin Farrell", "Paul Mescal"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which TV show won the Emmy for Best Comedy Series in 2023?",
                                      options: ["Ted Lasso", "Abbott Elementary", "The Bear", "Only Murders in the Building"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who is the most followed TikTok creator in 2023?",
                                      options: ["Khaby Lame", "Charli D'Amelio", "Addison Rae", "Bella Poarch"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which film won the Palme d'Or at the 2023 Cannes Film Festival?",
                                      options: ["Anatomy of a Fall", "Triangle of Sadness", "Decision to Leave", "Close"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the FIFA Women's World Cup Golden Boot in 2023?",
                                      options: ["Aitana Bonmatí", "Alex Morgan", "Sam Kerr", "Megan Rapinoe"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which musician released the album 'Renaissance' in 2022?",
                                      options: ["Beyoncé", "Taylor Swift", "Adele", "Billie Eilish"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which TV show features the character 'Joel' in 'The Last of Us'?",
                                      options: ["Pedro Pascal", "Bryan Cranston", "Henry Cavill", "Jensen Ackles"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the Golden Globe for Best Actress in a Motion Picture – Drama in 2023?",
                                      options: ["Cate Blanchett", "Michelle Yeoh", "Emma Stone", "Margot Robbie"],
                                      correctAnswer: 1,
                                    },
                                    {
                                      question: "Which country won the 2023 FIFA U-20 World Cup?",
                                      options: ["Uruguay", "Brazil", "Argentina", "France"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who is the most streamed female artist on Spotify in 2023?",
                                      options: ["Taylor Swift", "Beyoncé", "Ariana Grande", "Billie Eilish"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which film won the Academy Award for Best Animated Feature in 2023?",
                                      options: ["Guillermo del Toro's Pinocchio", "Turning Red", "Puss in Boots: The Last Wish", "Marcel the Shell with Shoes On"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the FIFA Best Women's Player award in 2023?",
                                      options: ["Aitana Bonmatí", "Alex Morgan", "Sam Kerr", "Megan Rapinoe"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which TV show features the character 'Eleven'?",
                                      options: ["Stranger Things", "The Umbrella Academy", "The Boys", "The Witcher"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the Academy Award for Best Supporting Actor in 2023?",
                                      options: ["Ke Huy Quan", "Brendan Gleeson", "Barry Keoghan", "Paul Dano"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which country won the 2023 FIFA Club World Cup?",
                                      options: ["Manchester City", "Real Madrid", "Al Hilal", "Flamengo"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who is the most followed female celebrity on Instagram in 2023?",
                                      options: ["Kylie Jenner", "Selena Gomez", "Cristiano Ronaldo", "Lionel Messi"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which film won the BAFTA Award for Best Film in 2023?",
                                      options: ["All Quiet on the Western Front", "The Banshees of Inisherin", "Everything Everywhere All at Once", "Elvis"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the Golden Globe for Best Actor in a Motion Picture – Drama in 2023?",
                                      options: ["Austin Butler", "Brendan Fraser", "Colin Farrell", "Paul Mescal"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which TV show features the character 'Homelander'?",
                                      options: ["The Boys", "Invincible", "The Umbrella Academy", "The Walking Dead"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the Academy Award for Best Supporting Actress in 2023?",
                                      options: ["Jamie Lee Curtis", "Angela Bassett", "Kerry Condon", "Stephanie Hsu"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which country won the 2023 FIFA Women's World Cup Golden Glove?",
                                      options: ["Spain", "United States", "England", "Germany"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who is the most streamed artist on YouTube in 2023?",
                                      options: ["Bad Bunny", "Taylor Swift", "BTS", "Ed Sheeran"],
                                      correctAnswer: 2,
                                    },
                                    {
                                      question: "Which film won the Academy Award for Best Original Screenplay in 2023?",
                                      options: ["Everything Everywhere All at Once", "The Banshees of Inisherin", "Tár", "The Fabelmans"],
                                      correctAnswer: 1,
                                    },
                                    {
                                      question: "Who won the FIFA Puskás Award in 2023?",
                                      options: ["Richarlison", "Kylian Mbappé", "Lionel Messi", "Erling Haaland"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which TV show features the character 'Saul Goodman'?",
                                      options: ["Better Call Saul", "Breaking Bad", "The Sopranos", "Ozark"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the Academy Award for Best Director in 2023?",
                                      options: ["Daniel Kwan & Daniel Scheinert", "Steven Spielberg", "Martin McDonagh", "Todd Field"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which country won the 2023 FIFA U-17 World Cup?",
                                      options: ["Germany", "Brazil", "France", "Spain"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who is the most followed male celebrity on Instagram in 2023?",
                                      options: ["Cristiano Ronaldo", "Lionel Messi", "Kylie Jenner", "Selena Gomez"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which film won the Academy Award for Best International Feature Film in 2023?",
                                      options: ["All Quiet on the Western Front", "Decision to Leave", "Close", "Argentina, 1985"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Who won the FIFA Best Goalkeeper award in 2023?",
                                      options: ["Emiliano Martínez", "Thibaut Courtois", "Alisson Becker", "Manuel Neuer"],
                                      correctAnswer: 0,
                                    },
                                    {
                                      question: "Which TV show features the character 'Dexter Morgan'?",
                                      options: ["Dexter", "Breaking Bad", "The Sopranos", "Ozark"],
                                      correctAnswer: 0,
                                    },
    ],
  },

];
