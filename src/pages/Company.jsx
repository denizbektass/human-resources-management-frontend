import CompanyCarts from "../components/organizma/CompanyCarts.tsx";
import { useNavigate } from "react-router-dom";

function Company() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div
        className="row mt-1 align-content-center"
        style={{ height: "100px" }}
      >
        <div className="col-11">
          <h1> Şirket Listesi </h1>
        </div>
        {/* SITE YONETICISI PROFIL BUTTONU */}
        <div className="col-1">
          <h1>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/user-profile")}
            >
              <i className="fa fa-user-gear"></i>
            </button>
          </h1>
        </div>
      </div>
      <div className="row m-3 vh-100">
        <CompanyCarts />
      </div>
    </div>
  );
}

export default Company;
