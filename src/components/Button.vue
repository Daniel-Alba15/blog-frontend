<template>
  <div>
    <button type="button" class="btn btn-dark btn-md rounded-1 rounded-lg">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["text"]
};
</script>
