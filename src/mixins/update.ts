export default {
  data() {
    return {
      registration: null,
      updateExists: false
    }
  },
  created() {
    // @ts-ignore
    document.addEventListener("swUpdated", this.updateAvailable, { once: true })
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // @ts-ignore
      if (this.refreshing) return;
      // @ts-ignore
      this.refreshing = true;
      window.location.reload();
    })
  },
  methods: {
    updateAvailable(event: any) {
      // @ts-ignore
      this.registration = event.detail;
      // @ts-ignore
      this.updateExists = true;
    },
    refreshApp() {
      // @ts-ignore
      this.updateExists = false
      // @ts-ignore
      if (!this.registration || !this.registration.waiting) return
      // @ts-ignore
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    }
  }
}
