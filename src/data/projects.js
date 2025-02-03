import {chatApplicationShots, eCommerceShots} from "assets/assets"

const { fileSharingShots, imageSharingShots, loginScreenShots,
    onlineStatusShots,paginationShots,realTimeMessagingShots,
    recordingShots,registerScreenShots, responsiveDesign } = chatApplicationShots

const { ecomHomePage,userAuthentication,shoppingCart,productSearch,
    productDetais,checkoutPayment,orders,wishlist,reveiw,responsiveEcom} = eCommerceShots




export const chatApplication = {
    title:"Chat Application",
    videoUrl:"https://www.dropbox.com/scl/fi/9gss8thcsqtrc2jbjn2td/chat-applilcation-online-video-cutter.com.mp4?rlkey=btklz141qv3hnr2wazgpreop7&st=5qzzv2g8&raw=1",
    links:{
        liveLink:null,
        gitHubFrontendLink:"https://github.com/akhilkrishnair/chat-app-react-frontend",
        gitHubBackendLink:"https://github.com/akhilkrishnair/chat-app-django-backend",
    },
    description:"The chat application was developed from scratch, demonstrating proficiency in both frontend and backend technologies. The backend is built using Django and Django Channels, leveraging WebSocket for real-time communication. The frontend is developed using React, providing a seamless and interactive user interface.",
    description2: "User authentication is handled using JWT, ensuring secure login and session management. Real-time messaging and notifications keep users engaged and informed of new messages. File sharing allows users to exchange images and documents effortlessly.",
    description3: "The application supports pagination and infinite scroll for chat history, ensuring that users can easily navigate through past conversations without overwhelming the browser. The responsive design ensures that the application works smoothly on various devices, from desktops to smartphones.",
    technologiesUsed:"Python, Django, REST API, Web Socket, Django Channels, React, MySQL, JWT, JavaScript, CSS, HTML.",
    homePageImages:
        'https://previews.dropbox.com/p/thumb/ACUeofQNDX8jtAjc7FQHdc8_AhFbizaZsbV_gsTMle8x2IpJ6yUtdkqzQJ5FURGqp60oA7RsVvxoTnei83r-nwaJQ2IqThmekPdk0_rfexIYQr53HXpXub4I3Wp4FTkA9rEeYLgcYCTWYbL0ZR66k9MoJ0Brb1sAnHxmlgznLkzhgqhtoevlxBYeCNewYRxTPwPmJHGTKP-LdrrFWY4Wb7hO-jcsGnQLlgAbAXuduV90JDOxMXBBw09kvMS38vOZTa1a1_5wERZpH-IbHZJlOF__ySKBL0I1ZWEjXh4PkxZ6XFUE_hEXCr6fNjDIWGIwPlC7eWGFX17sFADyl0VKE8PE/p.png?is_prewarmed=true',
    keyFeatures:[
        {
            title:"Real-Time Messaging",
            description:"Enables users to send and receive messages instantly without needing to refresh the page. This is achieved using WebSocket and Django Channels.",
            screenShots:[
                {
                    title:"shot 1",
                    image:realTimeMessagingShots.realTimeMessaging1
                },
                {
                    title:"shot 2",
                    image:realTimeMessagingShots.realTimeMessaging2
                },
                {
                    title:"shot 3",
                    image:realTimeMessagingShots.realTimeMessaging3
                }
            ]
        },
        {
            title:"User Authentication and Authorization",
            description:"Users can register, log in, and authenticate using JWT. Permissions ensure that users can only access their own data.",
            screenShots:[
                {
                    title:"Login page",
                    image:loginScreenShots.loginPage
                },
                {
                    title:"Email or Password error",
                    image:loginScreenShots.loginEmailPasswordError
                },
                // {
                //     title:"Invalid Email Error",
                //     image:loginScreenShots.loginInvalidEmailError
                // },
                {
                    title:"Registration page",
                    image:registerScreenShots.registerPage
                },              
                {
                    title:"E-mail validation before registration",
                    image:registerScreenShots.registerInvalidEmail
                },              
                {
                    title:"Password and confirm password not matching senerio",
                    image:registerScreenShots.registerPasswordConfirmPasswordNotMatch
                },              
                {
                    title:"Already used e-mail",
                    image:registerScreenShots.registerEmailAlreadyUsed
                },               
            ]
        },
        {
            title:"Files Sharing",
            description:" Users can share images, documents, and other files within the chat. The application supports various file formats and ensures secure storage and retrieval.",
            screenShots:[
                {
                    title:"Selecting images before sending",
                    image:imageSharingShots.imageSelecting
                },  
                {
                    title:"Images selected for sending",
                    image:imageSharingShots.imageSelected
                },  
                {
                    title:"Images have been sent",
                    image:imageSharingShots.imageSent
                },  
                {
                    title:"Files selecting before sending",
                    image:fileSharingShots.fileSelecting
                },  
                {
                    title:"Files selected for sending",
                    image:fileSharingShots.fileSelected
                },  
                {
                    title:"Files have been sent",
                    image:fileSharingShots.fileSent
                },  
                
            ]
        },
        {
            title:"Sending Voice Messages",
            description:"Enables users  to record, send and receive voice messages instantly.",
            screenShots:[
                {
                    title:"Recording Voice",
                    image:recordingShots.recordingStarted,
                },
                {
                    title:"Voice has been recorded",
                    image:recordingShots.recordingSaved,
                },
                {
                    title:"Voice has been sent",
                    image:recordingShots.recordingSent,
                },
                {
                    title:"Playing voice message",
                    image:recordingShots.recordingPlay,
                },
            ]
        },
        {
            title:"Real-Time Notifications",
            description:"Users receive notifications for new messages, even when they are not actively viewing the chat window.",
            screenShots:[
                {
                    title:"Users get notification if a new message has.",
                    image:realTimeMessagingShots.realTimeMessaging2
                }               
            ]
        },
        {
            title:"Real-Time online status",
            description:"Users online status updated when they are connected with websocket, even when they are not actively viewing the chat window.",
            screenShots:[
                {
                    title:"User online status",
                    image:onlineStatusShots.onlineStatus1
                }               
            ]
        },
        {
            title:"Pagination and Infinite Scroll",
            description:"Chat history is paginated and supports infinite scroll, allowing users to load more messages as they scroll up.",
            screenShots:[
                {
                    title:"Scroll top to load old messages also has a dedicated button for loading old messages",
                    image:paginationShots.pagination1
                }
            ]
        },
        {
            title:"Responsive Design",
            description:"The chat application is fully responsive, providing an optimal user experience on both mobile and desktop devices.",
            screenShots:[
                {
                    title:"Home page design in mobile",
                    image:responsiveDesign.homeMobile
                },
                {
                    title:"Home page design in tablet",
                    image:responsiveDesign.homeTab
                },
                {
                    title:"Chat page design in mobile",
                    image:responsiveDesign.chatPageMobile
                },
                {
                    title:"Chat page design in tablet",
                    image:responsiveDesign.chatPageTab
                },
                {
                    title:"Profile page design in Desktop",
                    image:responsiveDesign.profilePageDesktop
                },
                {
                    title:"Profile page design in mobile",
                    image:responsiveDesign.profilePageMobile1
                },
                {
                    title:"Profile page design in tablet",
                    image:responsiveDesign.profilePageMobile2
                },
            ]
        }
    ],
}

export const eCommerce = {
    title:"E-Commerce Project",
    videoUrl:"https://www.dropbox.com/scl/fi/te66wsykb21iw7yciq95v/e_shop_1.mp4?rlkey=3z4zuqsznxuumwoank241dtok&st=bbn63b5m&raw=1",
    links:{
        liveLink:"https://e-shop-personal-af87f.web.app/#/",
        gitHubFrontendLink:"https://github.com/akhilkrishnair/e-commerce-react-frontend",
        gitHubBackendLink:"https://github.com/akhilkrishnair/e-commerce-django-backend",
    },
    description:"I developed a full-stack e-commerce platform using Django, React, and PostgreSQL. This project aimed to provide users with a seamless shopping experience by implementing various features including user authentication, product management, cart management, order processing, payment gateway, product review and wishlist functionality.",
    technologiesUsed:" Python, Django, REST API, React, PostgreSQL, JWT, JavaScript, HTML, CSS, Bootstrap, Nginx, AWS EC2, S3.",
    keyFeatures:[
        {
            title:"Home page",
            description:" Home page with product category collection, best offers, recent products viewed by user and product search area.",
            screenShots:[
                {
                    title:"Carousil images",
                    image:ecomHomePage.home1
                }, 
                {
                    title:"Product collections",
                    image:ecomHomePage.home2
                }, 
                {
                    title:"Today's best offer",
                    image:ecomHomePage.home3
                }, 
                {
                    title:"Recently viewed products",
                    image:ecomHomePage.home4
                }, 
            ]
        },
        {
            title:"User Authentication",
            description:" Implemented secure user authentication and authorization functionality to ensure user data privacy and access control.",
            screenShots:[
                {
                    title:"Registration page",
                    image:userAuthentication.register1
                },
                {
                    title:"Registraion e-mail error",
                    image:userAuthentication.register2
                },
                {
                    title:"Registration confirm password error",
                    image:userAuthentication.register3
                },
                {
                    title:"Registration e-mail verification",
                    image:userAuthentication.register4
                },
                {
                    title:"Log in page",
                    image:userAuthentication.login1
                }
            ]
        },
        {
            title:"Product Management",
            description:"Created a comprehensive product management system allowing administrators to add, edit, and delete products, as well as manage product variants.",
            screenShots:[
                
            ]
        },
        {
            title:"Shopping Cart",
            description:"Implemented a dynamic shopping cart feature enabling users to add products, update quantities, and remove items from their cart.",
            screenShots:[
                {
                    title:"shot 1",
                    image:shoppingCart.cart1
                },
                {
                    title:"shot 2",
                    image:shoppingCart.cart2
                }            
            ]
        },
        {
            title:"Product Search",
            description:"Integrated product search functionality to enable users to easily find products based on keywords or categories.",
            screenShots:[
                {
                    title:"shot 1",
                    image:productSearch.productSearch
                }
            ]
        },
        {
            title:"Product Details",
            description:"Developed a product details page with information about the product, available variants, and the option to select desired variants before adding to the cart.",
            screenShots:[
                {
                    title:"shot 1",
                    image:productDetais.productDetails1
                },
                {
                    title:"shot 2",
                    image:productDetais.productDetails2
                },
                {
                    title:"shot 3",
                    image:productDetais.productDetails3
                }
            ]
        },
        {
            title:"Checkout and payment gateway",
            description:" Implemented Razorpay to securely process payments. Integrated features such as order creation, payment capturing, and handling webhooks for real-time payment status updates.",
            screenShots:[
                {
                    title:"shot 1",
                    image:checkoutPayment.checkout1
                },
                {
                    title:"shot 2",
                    image:checkoutPayment.checkout2
                },
                {
                    title:"shot 3",
                    image:checkoutPayment.checkout3
                },
                {
                    title:"shot 4",
                    image:checkoutPayment.checkout4
                },
            ]
        },
        {
            title:"Order Processing",
            description:"Implemented a streamlined order processing system allowing users to place orders securely, view order history, and track the status of their orders.",
            screenShots:[
                {
                    title:"shot 1",
                    image:orders.orderDetail1
                },
                {
                    title:"shot 2",
                    image:orders.orderDetail2
                },
            ]
        },        
        {
            title:"Wishlist Management",
            description:"Added a wishlist feature enabling users to save products for future purchase consideration.",
            screenShots:[
                {
                    title:"shot 1",
                    image:wishlist.wishlist1
                },
            ]
        },
        {
            title:"Review System",
            description:"Implemented a review system allowing registered users to leave reviews and ratings for products they have purchased, enhancing product transparency and aiding other users in their purchase decisions.",
            screenShots:[
                {
                    title:"shot 1",
                    image:reveiw.review1
                },
            ]
        },
        {
            title:"Responsive Design",
            description:"The E-shop is fully responsive, providing an optimal user experience on both mobile and desktop devices.",
            screenShots:[
                {
                    title:"Home page design in mobile shot 1",
                    image:responsiveEcom.responsiveHome1
                },
                {
                    title:"Home page design in mobile shot 2",
                    image:responsiveEcom.responsiveHome2
                },
                {
                    title:"Home page design in mobile shot 3",
                    image:responsiveEcom.responsiveHome3
                },
                {
                    title:"Home page design in mobile shot 4",
                    image:responsiveEcom.responsiveHome4
                },
                {
                    title:"Products page design in mobile producst list",
                    image:responsiveEcom.responsiveProducts
                },
                {
                    title:"Product details page design in mobile shot 1",
                    image:responsiveEcom.responsiveProductDetails1
                },
                {
                    title:"Product details page design in mobile shot 2",
                    image:responsiveEcom.responsiveProductDetails2
                },
                {
                    title:"Product details page design in mobile shot 3",
                    image:responsiveEcom.responsiveProductDetails3
                },
                {
                    title:"Product details page design in mobile product reviews area",
                    image:responsiveEcom.responsiveReview1
                },
                {
                    title:"Product Details page design in mobile Give review area",
                    image:responsiveEcom.responsiveGiveReview1,
                },
                {
                    title:"Cart page design in mobile shot 1",
                    image:responsiveEcom.responsiveCart1
                },
                {
                    title:"Checkout page design in mobile shot 1",
                    image:responsiveEcom.responsiveCheckout1
                },
                {
                    title:"Checkout page design in mobile shot 2",
                    image:responsiveEcom.responsiveCheckout2
                },
            ]
        }
    ],
}



