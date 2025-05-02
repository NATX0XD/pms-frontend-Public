"use client";
import { customersController } from "@/api/controllers/customers";
import React, { useEffect, useState } from "react";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await customersController().findAll();
        console.log(response);
        if (response?.data) {
          setCustomers(response.data); // เข้าถึงข้อมูลลูกค้าใน response.data
        } else {
          setError("ไม่พบข้อมูลลูกค้า");
        }
      } catch (err) {
        console.error("Error fetching customers: ", err);
        setError("ไม่สามารถโหลดข้อมูลลูกค้าได้");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) return <div>กำลังโหลดข้อมูล...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>ข้อมูลลูกค้า</h1>
      <table>
        <thead>
          <tr>
            <th>ชื่อบริษัท</th>
            <th>อีเมล</th>
            <th>โทรศัพท์</th>
            <th>เครดิต</th>
            <th>เครดิตระยะเวลา</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.companyName}</td>
              <td>{customer.email}</td>
              <td>{customer.tel}</td>
              <td>{customer.credit}</td>
              <td>{customer.creditPeriod} วัน</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersPage;
