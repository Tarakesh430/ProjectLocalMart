const data ={
    users:[
        {
            name:'Tarakesh',
            email:'tarak@lowda',
            password:'1234',
            isAdmin:true,
           // isSeller:true,
        }
        ,{
            name:'Abhinav',
            email:'abhi@lowda',
            password:'123',
            isAdmin:false,
            //isSeller:false,
        }

    ],
    products:[
        {
            _id:'1',
            name:'Iphone 11',
            category:'SmartPhones',
            image:'/images/product1-iphone.jpg',
            price:2500,
            brand:'Apple',
            rating:4.5,
            numReviews:50,
            countInStock:2,
            description:'High quality and high priced',

        },
        {
            _id:'2',
            name:'Iphone 9',
            category:'SmartPhones',
            image:'/images/product2-iphone.jpg',
            price:2000,
            brand:'Apple',
            rating:4,
            numReviews:500,
            countInStock:4,
            description:'High quality and high priced',

        },
        {
            _id:'3',
            name:'Iphone 7',
            category:'SmartPhones',
            image:'/images/product1-iphone.jpg',
            price:1500,
            brand:'Apple',
            rating:4.5,
            numReviews:5000,
            countInStock:0,
            description:'High quality and high priced',

        },
        {
            _id:'4',
            name:'Coolpad Note 5',
            category:'Android',
            image:'/images/product2-iphone.jpg',
            price:500,
            brand:'ApplCoolpad',
            rating:3.5,
            numReviews:50,
            countInStock:3,
            description:'low quality and low priced',

        },
        {
            _id:'5',
            name:'Redmi Note 5',
            category:'Android',
            image:'/images/product1-iphone.jpg',
            price:700,
            brand:'Redmi',
            rating:4,
            numReviews:50,
            countInStock:2,
            description:'medium quality and low priced',

        }
    ]
};
export default data;