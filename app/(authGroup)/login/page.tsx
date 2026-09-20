import LoginFrom from "../_components/LoginFrom";


export default function LoginPage() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-8 rounded-lg border p-8 shadow-lg">
          {/* Login form content goes here */}
          <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-gray-500">Enter your credentials to access your account.</p>
          </div>
          {/*From */}
          <LoginFrom />
        </div>
      </div>
    </>
  )
}
