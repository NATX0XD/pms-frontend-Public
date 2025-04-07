"use client";

import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, CardBody, Switch, Link } from "@heroui/react";
import { FaChevronLeft, FaChevronRight, FaChevronDown, FaChevronUp, FaSearch, FaMoon, FaSun, FaSignOutAlt } from 'react-icons/fa';
import { useTheme } from "next-themes";
import { Navigation } from "@/configurations/navigation/Navigation";

const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState({});
    const [collapsed, setCollapsed] = useState(false);
    
    return (
        <Card className={`${collapsed ? 'w-20' : 'w-64'} h-full rounded-none border-r transition-all duration-300`}>
            <CardBody className="p-0 flex flex-col h-full">
                <div className="p-4 flex items-center justify-between border-b">
                    {!collapsed && <span className="font-bold">CJM Logistic</span>}
                    <Button isIconOnly variant="light" onPress={() => setCollapsed(!collapsed)}>
                        {collapsed ? <FaChevronRight size={16} /> : <FaChevronLeft size={16} />}
                    </Button>
                </div>
                
                <div className="flex-grow px-4 py-2 overflow-y-auto">
                    {Navigation.map((item, index) => (
                        <div key={index}>
                            <Button
                                as={Link}
                                to={item.url}
                                variant="light"
                                className="w-full mb-2 justify-start hover:bg-gray-100 dark:hover:bg-gray-700"
                                startContent={item.icon}
                                endContent={item.children && !collapsed ? (openMenus[index] ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />) : null}
                                onPress={() => item.children && setOpenMenus(prev => ({ ...prev, [index]: !prev[index] }))}
                            >
                                {!collapsed && <span>{item.title}</span>}
                            </Button>

                            {item.children && openMenus[index] && !collapsed && (
                                <div className="pl-4 space-y-1 mb-2">
                                    {item.children.map((child, childIndex) => (
                                        <Button
                                            key={childIndex}
                                            as={Link}
                                            to={child.url}
                                            variant="light"
                                            size="sm"
                                            className="w-full justify-start text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                                            startContent={child.icon}
                                        >
                                            {child.title}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t mt-auto">
                    <div className="flex gap-2">
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" />
                        {!collapsed && (
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">ณัฐวุฒิ ธนกุล</span>
                                <span className="text-xs text-gray-500">Web Designer</span>
                            </div>
                        )}
                        <Button variant="light" color="danger" startContent={<FaSignOutAlt size={16} />} onPress={() => console.log("Logout")} />
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default Sidebar;
