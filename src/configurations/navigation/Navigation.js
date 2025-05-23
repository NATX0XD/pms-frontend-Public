import { AiFillDashboard, AiFillFileText } from "react-icons/ai";
import { BiPackage } from "react-icons/bi";
import { FaFileInvoiceDollar, FaUser } from "react-icons/fa";
import { IoBarChart, IoReceiptSharp } from "react-icons/io5";

const Navigation = [
  {
    title: "Dashboard",
    url: "/",
    icon: <AiFillDashboard className="text-lg" />,
  },
  {
    title: "ใบเสนอราคา",
    url: "/quotation",
    icon: <AiFillFileText className="text-lg" />,
  },
  {
    title: "ใบแจ้งหนี้",
    url: "/invoice",
    icon: <FaFileInvoiceDollar className="text-lg" />,
  },
  {
    title: "ใบเสร็จรับเงิน",
    url: "/receipt",
    icon: <IoReceiptSharp className="text-lg" />,
  },
  {
    title: "สินค้า",
    url: "/products",
    icon: <BiPackage className="text-lg" />,
  },
  { title: "รายงาน", url: "/report", icon: <IoBarChart className="text-lg" /> },
  { title: "Users", url: "/users", icon: <FaUser className="text-lg" /> },

  //   {
  //     title: "Quotation",
  //     url: "/quotation",
  //     icon: <FaFileAlt />,
  //     children: [
  //       { title: "New Quotation", url: "/quotation/new", icon: <FaPlus /> },
  //       { title: "Quotation List", url: "/quotation/topic", icon: <FaList /> },
  //     ],
  //   },
  //   { title: "Customer", url: "/customer", icon: <FaUser /> },
];

export { Navigation };
