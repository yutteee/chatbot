<template>
    <div class="chat-header">
        <div class="title">Inquire by chat</div>
        <div class="cancel" @click="closeChatModal">
            <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        closeChatModal : function (){
            this.$emit('childClick')
        }
    }
}
</script>

<style scoped>
.chat-header {
    background-color: #525F7F;
    height: 40px;
    color: #fff;
    line-height: 40px;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    position: relative;
}

.cancel {
    position: absolute;
    right: 16px;
}
</style>