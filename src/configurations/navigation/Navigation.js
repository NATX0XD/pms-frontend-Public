import { FaHome, FaList, FaFileAlt, FaUser, FaPlus } from 'react-icons/fa';

const Navigation = [
    { title: 'Dashboard', url: '/', icon: <FaHome /> },
    { title: 'Incoterm', url: '/incoterm', icon: <FaList /> },
    {
        title: 'Quotation', url: '/quotation', icon: <FaFileAlt />, children: [
            { title: 'New Quotation', url: '/quotation/new', icon: <FaPlus /> },
            { title: 'Quotation List', url: '/quotation/topic', icon: <FaList /> }
        ]
    },
    { title: 'Customer', url: '/customer', icon: <FaUser /> }
];

export { Navigation };
