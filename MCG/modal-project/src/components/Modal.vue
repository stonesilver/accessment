<template>
    <div class="backdrop">
        <div class="modal">
            <h1 class="modal-header">
                Welcome to the <span class="squad">Squad</span> 👍
            </h1>
            <button class="close-btn">Great</button>
        </div>
    </div>
</template>

<style>
.backdrop {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(50, 59, 75, 0.5);
    filter: blur(2px);
    z-index: 5;
}

.modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 495px;
    height: 477px;
    background-color: #fff;
}

.modal-header {
    font-size: 40px;
    font-weight: 700;
    width: 332px;
    margin: 0 auto;
}

.modal-header .squad {
    color: #34BC85;
}

.close-btn {
    background-color: #3BAA90;
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    width: 332px;
    height: 56px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin-top: 1.125rem;
    cursor: pointer;
}
</style>