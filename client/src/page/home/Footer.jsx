import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-transparent text-base-content p-4 border">
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved Sakib Fakir
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
