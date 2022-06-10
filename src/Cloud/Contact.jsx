import Anish from  './what/anish.jpg';
import Bhai from  './what/bhai.jpg';
import Maa from  './what/maa.jpg';
import Sir from  './what/sir.jpg';
import Mb from  './what/mb.jpg';
import Smriti from  './what/Smriti.jpg';
import Wb from './what/my.jpeg';
import Me from './what/me.jpeg';

var sender_id = localStorage.getItem('id');

const Contact=[
    {   
        id:1,
        img:Bhai,
        name:'Bhaiya jii',
        message: [
            {   
                id:0,
                sender_message:'Heeyyy !!!  Bhai jii',
                sender_id:2,
                sender_message:'Hello Ayush',
            },
            {   
                id:0,
                resiving_message:'Heeyyy !!! Bh  jii',
                sender_id:sender_id,
                sender_message:'Kese ho??',
            },
            {   
                id:0,
                resiving_message:'Heeyyy !!! World',
                sender_id:sender_id,
                sender_message:'Hello New',
            },

        ]
    },
    {   
        id:2,
        img:Maa,
        name:'Maa',
        message: [
            {   
                id:0,
                img:'Heeyyy !!! Maa',
                sender_id:sender_id,
                sender_message:'Hello Ayush',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello Manas',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello New',
            },

        ]
    },
    {
        id:3,
        img:Smriti,
        name:'Smriti',
        message: [
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:2,
                sender_message:'Hello Ayush',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello Manas',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello New',
            },

        ]
    },
    {
        id:4,
        img:Me,
        name:'Anshu',
        message: [
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:2,
                sender_message:'Hello Anish',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Kese ho',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Kya chal rha he',
            },

        ]
    },
    {   
        id:5,
        img:Mb,
        name:'Manas Bhaiya jii',
        message: [
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:2,
                sender_message:'Hello Ayush',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello Manas',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello New',
            },

        ]
    },
    {   
        id:6,
        img:Sir,
        name:'Sadiq Sir jii',
        message: [
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:2,
                sender_message:'Hello Ayush',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello Manas',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello New',
            },

        ]
    },
    {
        id:7,
        img:Anish,
        name:'Anish',
        message: [
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:2,
                sender_message:'Hello Ayush',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello Manas',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello New',
            },

        ]
    },
    {
        id:8 ,
        img:Wb,
        name:'Ayush',
        message: [
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:2,
                sender_message:'Hello Ayush',
            },
            {   
                id:2,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello Manas',
            },
            {   
                id:0,
                resiving_message:'Heeyyy World',
                sender_id:sender_id,
                sender_message:'Hello New',
            },

        ]
    },
    
    
]
export default Contact;