<template>
    <div>
        <header>
            <div>
                <slot name="header"></slot>
                <slot name="herobanner"></slot>
            </div>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer">

            </slot>
        </footer>
    </div>
</template>
