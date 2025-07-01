const ADMIN_CREDENTIALS = {
  username: "JeanMendanha",
  password: "21121991",
}

export function login(username: string, password: string): boolean {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    if (typeof window !== "undefined") {
      localStorage.setItem("admin_authenticated", "true")
    }
    return true
  }
  return false
}

export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_authenticated")
  }
}

export function checkAuth(): boolean {
  if (typeof window !== "undefined") {
    return localStorage.getItem("admin_authenticated") === "true"
  }
  return false
}
