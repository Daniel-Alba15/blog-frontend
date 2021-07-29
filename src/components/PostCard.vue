<template>
  <div class="row mb-2">
    <div v-for="post in posts" :key="post.post_id" class="col-md-6">
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{{ post.title }}</h3>
          <div class="mb-1 text-muted">{{ formatDate(post.created_at) }}</div>
          <p class="card-text mb-auto" v-html="this.$func.escape(post.content).substring(0, 50)">
          
          </p>
          <router-link :to="'/post/' + post.slug" class="stretched-link"
            >Continue reading</router-link
          >
        </div>
        <div class="col-auto d-none d-lg-block">
          <img
            class="bd-placeholder-img"
            width="200"
            height="250"
            alt=""
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrNy0rKzc3Kzc3NystKysrKysrKystKysrNy03Ky0tKy0rNys3KysrNysrLTcrNys3K//AABEIASsAqAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EACcQAQEBAAAEBAcBAQAAAAAAAAABEQIhQXExkbHwElFhgaHB4dED/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDh855M9eaCAKdPfqAFLUBaIsgItgAYWhAQWwBFEBQ0BFwJAQXAEF0BFKgAuAAACKAB77ACKaBiLUAUARSrASQSAAsW28pnuglIFAEUF6ffx6oiggqAoVAURbAEVAGviQ0D3/EVABUAUtNBBQEUs/KA1xcOfjnO253ZUA1AAUAEGuWdd59s5Z+wZFQFDADAIAigBqNXOWXv9P8AQRFKBVz3zTeiA0yKACAsa/7Thlvw22dLZ8N8PltzzZqApgQDQKAEMBFkKAgoBoRAVFQFAwBcQAKSloBvkgCkAEUQFBAVFgBJ8wQBSFoIKSAGoALEUCrL8/ugAigASIAtAEWoAKaAAgCreX8ZBb5GE9wvYClAEUARYUALDUBTAoIKaCAAAAt6cv6CAqACwoAUsC0AEAFNA0ACBUBUVAAAAABUAWIAtAAkBbxW59OU7ePL72+YIioC6EQFRS0AAEFQAAAAAABUAXAAFt99ENAqAAACiKBgABKgAAAAAAAADUMWCCJWmaogAAACo1OH8ePp+wIlAEFqAAAAAAAAA3BJThQVmt8ff1/bzUAAAAFiLAAQAAAAAAAAAABqMtcIJqLYgAAAACxFgKi2MgAAAAAAAAAANSsgAAAAAACyosBcZbZoIAAAAAAAAAAAAAAAAAAsQBtmrKlBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["posts"],
  methods: {
    formatDate(date) {
      const a = new Date(date);
      return a.toLocaleDateString("es-CO");
    }
  }
};
</script>
