import React from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';

export const gridProjectImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="Project-item"
    />
  </div>
);

export const gridProjectstatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const gridMemberProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.MemberImage}
      alt="Member"
    />
    <p>{props.Name}</p>
  </div>
);

const gridMemberCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need.
    </h3>
  </div>
);
const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="Member"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center' },
  { field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center' },
  { field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },
  { field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center' },

  { field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const MembersGrid = [
  { headerText: 'Member',
    width: '150',
    template: gridMemberProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridMemberCountry },

  { field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center' },
  { field: 'MemberID',
    headerText: 'Member ID',
    width: '125',
    textAlign: 'Center' },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Home',
        // icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'Projects',
        // icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Members',
        // icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        // icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        // icon: <AiOutlineCalendar />,
      },
      {
        name: 'editor',
        // icon: <FiEdit />,
      },
      {
        name: 'Contactus',
        // icon: <FiEdit />,
      },
      {
        name: 'Aboutus',
        // icon: <FiEdit />,
      },
    ],
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: 'No. of users 120',
    // percentage: '-4%',
    title: 'Users',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: 'No. of Projects 4',
    // percentage: '+23%',
    title: 'Project',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: 'No. of Customers 10',
    // percentage: '+38%',
    title: 'Customers',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
];

export const weeklyStats = [
  {
    // icon: <FiShoppingCart />,
    amount: '10',
    title: 'Task Completed',
    // desc: 'John ',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    // icon: <FiStar />,
    amount: '12',
    title: 'Task Pending',
    // desc: 'MaterialPro Admin',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    // icon: <BsChatLeft />,
    amount: '3',
    title: 'Testing',
    // desc: 'Ample Admin',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const ProjectsGrid = [
  {
    field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridProjectstatus,
    field: 'ProjectItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'ProjectId',
    headerText: 'Project ID',
    width: '120',
    textAlign: 'Center',
  },

];

export const customersData = [
  {
    CustomerName: 'Ruth R',
    CustomerEmail: 'ruth.r@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Face Detection System',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {

    CustomerName: 'John Don',
    CustomerEmail: 'johndon@gmail.com',
    ProjectName: 'Delivery App',
    Status: 'Pending',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerName: 'Shawn James',
    CustomerEmail: 'shawnjames@gmail.com',
    ProjectName: 'Stock Market Prediction',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
];

export const MembersData = [
  {
    MemberID: 1,
    Name: 'Rubert R',
    Title: 'Software Developer',
    HireDate: '01/02/2023',
    Country: 'USA',
    ReportsTo: 'Carson',
    MemberImage:
    avatar3,
  },
  {
    MemberID: 2,
    Name: 'John Don',
    Title: 'Software Developer',
    HireDate: '01/02/2022',
    Country: 'USA',
    ReportsTo: 'Carson',
    MemberImage:
      avatar3,
  },
  {
    MemberID: 3,
    Name: 'Richie Rich',
    Title: 'HR',
    HireDate: '01/02/2023',
    Country: 'USA',
    ReportsTo: 'Carson',
    MemberImage:
      avatar4,
  },
  {
    MemberID: 4,
    Name: 'Ruth R',
    Title: 'Software Developer',
    HireDate: '01/02/2022',
    Country: 'USA',
    ReportsTo: 'Carson',
    MemberImage:
      avatar2,
  },
  {
    MemberID: 5,
    Name: 'Sam Parker',
    Title: 'Testing',
    HireDate: '01/02/2022',
    Country: 'USA',
    ReportsTo: 'Carson',
    MemberImage:
      avatar,
  },
  {
    MemberID: 4,
    Name: 'John Parker',
    Title: 'Technical Head',
    HireDate: '01/02/2023',
    Country: 'USA',
    ReportsTo: 'Carson',
    MemberImage:
      avatar,
  },
];

export const ProjectsData = [
  {
    ProjectId: 10248,
    CustomerName: 'Lawrence',
    ProjectName: 'Kanban',
    TotalAmount: 32.38,
    Status: 'pending',
    StatusBg: '#FB9678',

  },
  {
    ProjectId: 10248,
    CustomerName: 'Ruth',
    ProjectName: 'Face Detection',
    TotalAmount: 56.34,
    Status: 'complete',
    StatusBg: '#8BE78B',

  },
  {
    ProjectId: 10248,
    CustomerName: 'Shawn',
    ProjectName: 'Image Detection',
    TotalAmount: 93.31,
    Status: 'active',
    StatusBg: '#03C9D7',

  },
  {
    ProjectId: 10248,
    CustomerName: 'Rohan',
    ProjectName: 'Stock Market Prediction',
    TotalAmount: 93.31,
    Status: 'canceled',
    StatusBg: '#FF5C8E',

  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Mini Project Presentation',
    Location: 'F.C.R.T',
    StartTime: '2023-04-29T10:00:00.000Z',
    EndTime: '2023-04-29T04:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];
