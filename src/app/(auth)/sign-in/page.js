"use client";
import { useSettings } from "@/hooks/useSettings";

import { Button, Card, CardBody, Form, Input } from "@heroui/react";
import React, { useState } from "react";
import clsx from "clsx";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import SignInPage from "@/views/sign-in/SignInPage";

const SignIn = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { settings, saveSettings } = useSettings();
  const [resetPasswordToken, setResetPasswordToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const switchMode = () => {
    saveSettings("mode");
  };
  const handleChange = (name, value) => {
    saveSettings({ ...settings, [name]: value });
  };

  // const handleSignIn = async (e) => {
  //   e.preventDefault();
  //   setError(""); // เคลียร์ error ก่อน

  //   const form = new FormData(e.target);
  //   const username = form.get("username");
  //   const password = form.get("password");

  //   const result = await signIn("credentials", {
  //     username,
  //     password,
  //     redirect: false,
  //   });

  //   if (result?.error) {
  //     setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  //   } else {
  //     router.replace("/");
  //   }
  // };
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.target);
    const username = form.get("username");
    const password = form.get("password");

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    setLoading(false);
    if (result.error && !result.ok) {
      const error = JSON.parse(result.error);
      if (error.code === 21201) {
        setResetPasswordToken(error.data.access_token);
      } else if (error.code === 21206) {
        // form.setFields([
        //   {
        //     name: "username",
        //     errors: [error.description],
        //   },
        // ]);
        console.log(error.description);
        setError(error.description);
      } else if (error.code === 21202) {
        // form.setFields([
        //   {
        //     name: "password",
        //     errors: [error.description],
        //   },
        // ]);
        console.log(error.description);
        setError(error.description);
      } else if (error.code === 21207) {
        // notification.error({
        //   message: "เข้าสู่ระบบไม่สำเร็จ",
        //   description: error.description,
        //   showProgress: true,
        //   pauseOnHover: true,
        // });
        console.log("เข้าสู่ระบบไม่สำเร็จ");
        setError("เข้าสู่ระบบไม่สำเร็จ");
      }
    }
    if (result.ok && result.status === 200) {
      router.replace("/");
    }
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
    // <>
    //   <Card className="flex flex-col md:flex-row w-full max-w-3xl shadow-xl rounded-2xl overflow-hidden p-6 m-8">
    //     <div
    //       className="hidden sm:flex md:w-2/5 text-white items-center justify-center p-6"
    //       style={{
    //         borderRadius: 16,
    //         background: `linear-gradient(135deg, var(--primaryGradientStart) 0%, var(--primaryGradientMiddle) 50%, var(--primaryGradientEnd) 100%)`,
    //       }}
    //     >
    //       <div>
    //         <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
    //         <p className="text-sm">
    //           Sign in to your account to continue to the{" "}
    //           {process.env.NEXT_PUBLIC_APP_NAME} dashboard .
    //         </p>
    //       </div>
    //     </div>

    //     <div className="md:w-3/5 bg-transparent p-8">
    //       <CardBody className="space-y-6">
    //         <div className=" text-center ">
    //           <h2
    //             className={clsx(
    //               "text-3xl font-bold bg-gradient-to-r transition-all duration-1000 from-[var(--primaryGradientStart)] via-[var(--primaryGradientMiddle)] to-[var(--primaryGradientEnd)] bg-clip-text text-transparent"
    //             )}
    //           >
    //             {process.env.NEXT_PUBLIC_APP_NAME}
    //           </h2>
    //           <h2 className="text-2xl font-semibold dark:text-white mb-2">
    //             ลงชื่อเข้าใช้
    //           </h2>
    //           {error && <p className="text-red-500 text-sm">{error}</p>}
    //         </div>
    //         <Form onSubmit={handleSignIn} className="space-y-8 w-full">
    //           <Input
    //             label="Username"
    //             type="text"
    //             placeholder="กรอกชื่อผู้ใช้"
    //             name="username"
    //             classNames={inputStyles}
    //           />

    //           <Input
    //             label="Password"
    //             type="Password"
    //             placeholder="กรอกรหัสผ่าน"
    //             name="password"
    //             classNames={inputStyles}
    //           />
    //           <Button type="submit" color="primary" fullWidth>
    //             Sign In
    //           </Button>
    //         </Form>
    //       </CardBody>
    //     </div>
    //   </Card>

    //   <div className="fixed bottom-5 right-5 z-50">
    //     <Button
    //       isIconOnly
    //       radius="full"
    //       size="md"
    //       variant="solid"
    //       className="bg-white dark:bg-black/70 backdrop-blur-md"
    //       onPress={() =>
    //         handleChange("mode", settings.mode === "Dark" ? "Light" : "Dark")
    //       }
    //     >
    //       {settings.mode === "Dark" ? (
    //         <IoMdSunny className="text-lg" />
    //       ) : (
    //         <FaMoon className="text-lg" />
    //       )}
    //     </Button>
    //   </div>
    // </>
    <SignInPage />
  );
};

export default SignIn;
