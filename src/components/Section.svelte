<script>
    export let title;
    export let id;
</script>

<div class="section-container" id={id}>
    <h1>{title}</h1>
    <div class="section-content">
        <slot>

        </slot>
    </div>
</div>

<style>
    .section-container {
        display: flex;
        flex-direction: column;
        min-height: 40vh;
        margin: 250px auto 0 auto;
    }

    .section-container h1 {
        margin-bottom: 35px;
        font-size: 40px;
        text-align: center;
        color: var(--lightest-slate);
    }

    .section-container h1::before {
        content: "";
        display: inline-block;
        height: 1px;
        width: 30%;
        max-width: 270px;
        background-color: var(--slate);
        position: relative;
        left: -10px;
        top: -10px;
    }

    .section-container h1::after {
        content: "";
        display: inline-block;
        height: 1px;
        width: 30%;
        max-width: 270px;
        background-color: var(--slate);
        position: relative;
        right: -10px;
        top: -10px;
    }
</style>

