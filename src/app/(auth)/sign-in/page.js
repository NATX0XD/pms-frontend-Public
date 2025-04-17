"use client";
import { useSettings } from "@/hooks/useSettings";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { Button, Card, CardBody, Form, Input } from "@heroui/react";
import React, { useState } from "react";
import clsx from "clsx";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { authController } from "@/api/controllers/auth";

const SignIn = () => {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError(null);

  //   const res = await signIn("credentials", {
  //     redirect: false,
  //     username,
  //     password,
  //   });

  //   if (res?.error) {
  //     setError("Invalid username or password");
  //   } else {
  //     router.push("/");
  //   }
  // };

  // const handleSignIn = async ({ username, password }) => {
  //   setLoading(true);
  //   const result = await signIn("credentials", {
  //     username,
  //     password,
  //     redirect: false,
  //   });
  //   setLoading(false);
  //   if (result.ok && result.status === 200) {
  //     router.replace("/");
  //   }
  // };
  const { settings, saveSettings } = useSettings();

  const switchMode = () => {
    saveSettings("mode");
  };
  const handleChange = (name, value) => {
    saveSettings({ ...settings, [name]: value });
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("กรุณากรอกชื่อบัญชีและรหัสผ่านให้ครบถ้วน");
      return;
    }
    setError("");

    console.log("ข้อมูลการเข้าสู่ระบบ:", { username, password });

    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, password })
    // })
    // .then(response => response.json())
    // .then(data => console.log('API Response:', data))
    // .catch(err => setError('เกิดข้อผิดพลาดในการเชื่อมต่อ'));
  };

  const inputStyles = {
    innerWrapper: "bg-transparent",
    input: ["bg-transparent", "text-black", "placeholder:text-gray-400"],
    label: "text-gray-500",
    inputWrapper: [
      // "shadow-xl",
      "bg-[#F5F7FA]", // Light gray background like in the image
      "border-0",
      "ring-1",
      "ring-gray-300",
      "rounded-md",
      "group-data-[focus=true]:ring-1",
      "group-data-[focus=true]:ring-primary",
    ],
  };
  return (
    <>
      {/* <div className="hidden sm:flex md:w-1/2 relative flex-col justify-center items-center p-8">
        <div className="absolute inset-0 z-0"></div>
        <div className="z-10 relative max-w-md">
          <h1 className="text-4xl font-bold mb-6">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1>
          <p className="text-xl mb-8">
            ยินดีต้อนรับสู่ {process.env.NEXT_PUBLIC_APP_NAME}{" "}
            ระบบจัดการเนื้อหาการขนส่งและโลจิสติกส์ที่มีประสิทธิภาพ
          </p>
        </div>
      </div> */}

      {/* <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div
          className="w-full max-w-md p-8 shadow-lg"
          style={{
            borderRadius: 26,
            background: "rgba(255, 255, 255)",
          }}
        >
          <div className="text-center mb-8">
            <h2
              className={clsx(
                "pb-5 text-3xl font-bold bg-gradient-to-r transition-all duration-1000 from-[var(--primaryGradientStart)] via-[var(--primaryGradientMiddle)] to-[var(--primaryGradientEnd)] bg-clip-text text-transparent"
              )}
            >
              {process.env.NEXT_PUBLIC_APP_NAME}
            </h2>
            <h2 className="text-2xl font-bold">ลงชื่อเข้าใช้</h2>
            <p className="mt-2">
              ยินดีต้อนรับกลับมา! กรุณาลงชื่อเข้าใช้บัญชีของคุณ
            </p>
          </div>

          <Form onSubmit={handleSignIn} className="space-y-8 w-full">
            <Input
              key={"username"}
              label="ชื่อผู้ใช้"
              labelPlacement={"inside"}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              classNames={inputStyles}
              size="md"
            />
            <Input
              key={"password"}
              label="รหัสผ่าน"
              labelPlacement={"inside"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              classNames={inputStyles}
              size="md"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary rounded-lg"
              disabled={!username || !password}
            >
              เข้าสู่ระบบ
            </Button>
          </Form>
        </div>
      </div> */}

      <Card className="flex flex-col md:flex-row w-full max-w-3xl shadow-xl rounded-2xl overflow-hidden p-6 m-8">
        <div
          className="hidden sm:flex md:w-2/5 text-white items-center justify-center p-8"
          style={{
            borderRadius: 16,
            background: `linear-gradient(135deg, var(--primaryGradientStart) 0%, var(--primaryGradientMiddle) 50%, var(--primaryGradientEnd) 100%)`,
          }}
        >
          <div>
            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
            {/* <h3 className="text-2xl font-bold ">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </h3> */}
            <p className="text-sm">
              Sign in to your account to continue to the{" "}
              {process.env.NEXT_PUBLIC_APP_NAME} dashboard .
            </p>
          </div>
        </div>

        <div className="md:w-3/5 bg-transparent p-8">
          <CardBody className="space-y-6">
            <div className=" text-center ">
              <h2
                className={clsx(
                  "text-3xl font-bold bg-gradient-to-r transition-all duration-1000 from-[var(--primaryGradientStart)] via-[var(--primaryGradientMiddle)] to-[var(--primaryGradientEnd)] bg-clip-text text-transparent"
                )}
              >
                {process.env.NEXT_PUBLIC_APP_NAME}
              </h2>
              <h2 className="text-2xl font-semibold dark:text-white">
                ลงชื่อเข้าใช้
              </h2>
            </div>
            <Form onSubmit={handleSignIn} className="space-y-8 w-full">
              <Input
                label="Username"
                type="text"
                placeholder="กรอกชื่อผู้ใช้"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                classNames={inputStyles}
              />

              <Input
                label="Password"
                type="Password"
                placeholder="กรอกรหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                classNames={inputStyles}
              />
              <Button color="primary" fullWidth>
                Sign In
              </Button>
            </Form>
          </CardBody>
        </div>
      </Card>

      <div className="fixed bottom-5 right-5 z-50">
        <Button
          isIconOnly
          radius="full"
          size="md"
          variant="solid"
          className="bg-white dark:bg-black/70 backdrop-blur-md"
          onPress={() =>
            handleChange("mode", settings.mode === "Dark" ? "Light" : "Dark")
          }
        >
          {settings.mode === "Dark" ? (
            <GoSun className="text-lg" />
          ) : (
            <FaMoon className="text-lg" />
          )}
        </Button>
      </div>
    </>
  );
};

export default SignIn;
