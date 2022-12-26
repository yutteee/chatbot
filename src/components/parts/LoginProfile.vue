<template>
  <div class="profile">
    <img :src="require(`../../assets/${ this.$store.state.user_image }`)" />
    <div class="name">{{ this.$store.state.user_name }}</div>
  </div>
</template>

<style scoped>
.profile {
    display: flex;
    justify-content: flex-end;
    line-height: 64px;
}

img {
    width: 40px;
    height: 40px;
    padding-top: 12px;
    border-radius: 50%;
    object-fit: cover;
}

.name {
    font-size: 20px;
    color: #fff;
    padding-right: 128px;
    padding-left:32px;
}
</style>