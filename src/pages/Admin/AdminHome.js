import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Blood Bank Management System is a web-based application. Anyone interested in donating blood can register through this website. Moreover, any general hospitals can request blood through this site to the organization. Organizations are the central point in this application. They work as a bridge between donor and hospital. The hospital collect blood from organization as their patient requirement.   Admin is the main authority who can control donor, organization and hospital.
          </p>
          <p>
            Blood banks play a crucial role in the healthcare system, ensuring that safe and compatible blood is available for patients in need. However, managing the complex processes involved in blood collection, storage, and distribution can be challenging, particularly when relying on manual or outdated systems. These traditional methods often lead to inefficiencies, errors, and delays, which can have serious consequences for patient care.
          </p>
          <p>
            The Blood Bank Management System (BBMS) is designed to address these challenges by providing a comprehensive, automated solution that integrates all aspects of blood bank operations. This system enables efficient management of donor and recipient information, real-time tracking of blood inventory, and streamlined processes for matching donors with recipients. By leveraging modern technology, the BBMS enhances the reliability, accuracy, and responsiveness of blood bank services, ultimately improving patient outcomes and ensuring that blood is always available when needed.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
