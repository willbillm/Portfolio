import { writable } from 'svelte/store';

export const ProjectStore = writable([
    {
        title: 'Diary App',
        img: './images/portfolio projects/personal diary 2.png',
        description: 'A simplistic application that functions as a personal diary. Diary entries are saved to a database and displayed in a collapsible table.',
        keyInfo: {
            'Hurdles': 'Database functionality and concise information display were my primary goals when creating this project as this was my first solo project in React JS.',
            'Solutions': 'Using axios to communicate with mongoDB allowed for ease of saving/accessing/deleting information. As for the display, working with Material UI objects to make a collapsible table that allows for entries to be opened and closed keeps the entries organized and easy to understand.',
        },   
        tech: [
            'Node.js', 'MongoDB', 'Material UI'
        ],
        features: [
            'Save entries to database', 'Delete unwanted entries', 'Error messages for empty text fields'
        ],
        link: '',
        github: {
            client: 'https://github.com/willbillm/Diary-client',
            server: 'https://github.com/willbillm/Diary-server',
            default: ''
        }
    },

    {
        title: 'Practice Log',
        img: './images/portfolio projects/practice log 2.png',
        description: 'Track the amount of time spent practicing various skills. The app tracks total amount of practice sessions entered, total hours spent practicing, and average amount of time spent practicing in each session.',
        keyInfo: {
            'Hurdles': 'Working with numeric values instead of strings posed a variety of challenges. The ability to manipulate numbers in the database to get advanced statistics was the main hurdle of this project.',
            'Solutions': 'First, mapping the numbers onto an array allowed me to begin manipulating them. From there, use of the reduce and toFixed functions allowed me to sum totals, use division, and create values with decimal points.',
        },   
        tech: [
            'Node.js', 'MongoDB', 'Material UI'
        ],
        features: [
            'Track total hours practiced', 'Track total practice sessions', 'Track average length of practice sessions to two decimal points'
        ],
        link: '',
        github: {
            client: 'https://github.com/willbillm/Practice-Log-client',
            server: 'https://github.com/willbillm/Practice-Log-server',
            default: ''
        }
    },

    {
        title: 'Twooter',
        img: './images/portfolio projects/Twooter 2.png',
        description: 'Application resembling a standard social media app. The app allows for the creation of users, posts, and viewing of posts.',
        keyInfo: {
            'Hurdles': 'The ability to generate posts connected to specific users in the database was my largest hurdle. Simpler functionality such as switching between pages and displaying posts in an appealing way were also challenging.',
            'Solutions': 'To create posts connected to a user, I used two different data sets for users and posts. When generating a post, the selected user is retrieved from the user data and included with the post data. To switch between pages I used react-router-dom. Finally, to present the data I once again used a table object from Material UI and adjusted it to suit my purposes.',
        },   
        tech: [
            'Node.js', 'Material UI', 'MongoDB'
        ],
        features: [
            'Ability to create users and posts', 'View posts in auto-generating table', 'Switch between pages based on desired action'
        ],
        link: 'https:williamcginportfolio.netlify.app/',
        github: {
            client: 'https://github.com/willbillm/Twooter-client',
            server: 'https://github.com/willbillm/Twooter-server',
            default: ''
        }
    }
])