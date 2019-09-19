<template>
  <div class="container">
    <article>
      <p>{{ reminder.title }}</p>
      <p>{{ reminder.content }}</p>
      <p>Upcomming message: {{ reminder.when }}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Reminders',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    reminder() {
      return this.$store.state.reminders.all.find(
        (reminder) => reminder.id === this.id
      )
    }
  },
  head() {
    return {
      title: this.reminder.title + ' ⏰',
      meta: [
        { name: 'twitter:title', content: this.reminder.title },
        { name: 'twitter:description', content: this.reminder.content },
        {
          name: 'twitter:image',
          content:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTa7p9dP3luG09tHmTWk8WqqZ-LCuUt2H3y9veP5FAAYbkrMRk'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
