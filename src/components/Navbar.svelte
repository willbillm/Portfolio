<script>
    $: scrollDir = 'none';

    let oldVal = 0;
    let newVal = 0;

    var isScrolling;
    var isHovering;

    function handleHover() {
        isHovering = true;
        scrollDir = 'up';
    }

    function handleMouseLeave () {
        isHovering = false;
    }

    window.addEventListener('scroll', e => {

        newVal = -window.pageYOffset;

        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            if (isHovering || newVal === 0) {
                return
            };
            scrollDir = 'down';
        }, 1000)

        

        if (newVal === 0) {
            scrollDir = 'none';
        } else if (oldVal < newVal) {
            scrollDir = 'up';
        } else if ( oldVal > newVal) {
            scrollDir = 'down';
        }

        oldVal = newVal;

    });

    function handleScroll({ target }) {
        scrollDir = 'down';
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) {
            return;
        }
        el.scrollIntoView({behavior: 'smooth'});
    }

    function handleClick() {
        open(resume.docx)
    }

</script>

<nav class={`navbar ${scrollDir}`} on:mouseover={handleHover} on:focus={() => console.log("focused")} on:mouseleave={handleMouseLeave}>

    <div class="logo-container">
        <img src="./images/letter-w.png" alt="logo for my website"/>
    </div>
    <ul>
        <li>
            <h1><a href="#about" on:click|preventDefault={handleScroll}>about</a></h1>
        </li>
        <li>
            <h1><a href="#projects" on:click|preventDefault={handleScroll}>projects</a></h1>
        </li>
        <li>
            <h1><a href="#contact" on:click|preventDefault={handleScroll}>contact</a></h1>
        </li>
        <li>
            <a href="https://pdfhost.io/v/XOKNI1yT5_William_McGinnis_Resume"><button><h1>resume</h1></button></a>
        </li>
    </ul>
</nav>

<style>
    .navbar {
        height: 85px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: sticky;
        background-color: var(--navy);
        transition: all 300ms ease-in;
        top: 0;
        z-index: 10;
    }

    .navbar ul {
        height: 75px;
        list-style: none;
        display: flex;
        top: 22px;
        position: relative;
        right: 30px;
        min-width: 450px;
        justify-content: space-between;
        color: var(--lightest-slate);
        
    }

    .navbar h1 {
        font-weight: 100;
        font-size: 19px;
        margin: 0;
        position: relative;
        cursor: pointer;
        top: .5em;
    }

    .navbar h1:hover {
        color: var(--green);
        transition: color 300ms ease-in;
    }

    .navbar button h1 {
        top: -1px;
    }

    .navbar button {
        background: none;
        color: var(--lightest-slate);
        border: 1px solid var(--green);
        border-radius: 5px;
        padding: .5em .8em;
        margin: 0;

    }

    .navbar button:hover {
        color: var(--green);
        transition: all 300ms ease-in;    
        background-color: rgba(100 255 218 / .1);
        cursor: pointer;
    }
    
    .logo-container {
        top: 10px;
        left: 30px;
        position: relative;
    }

    .navbar img {
        width: 70px;
    }

    .up {
        box-shadow: 0px 10px 30px -10px var(--navy-shadow);
        transform: translateY(0);
    }

    .down {
        transform: translateY(-100px);
    }

    @media (max-width: 900px) {

        .navbar {
            position: relative;
            justify-content: center;
        }

        .navbar ul {
            min-width: 0;
            right: 7%;
        }

        .navbar li {
            padding: 0 4%;
        }

        .logo-container {
            display: none;
        }
    }


</style>