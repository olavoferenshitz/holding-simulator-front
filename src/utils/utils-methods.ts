export function handleDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
