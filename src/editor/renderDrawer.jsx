import React, { useState } from "react";
import Googlesheets from "./Google-sheets";
import CustomDrawer from "./drawer";

const RenderDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <CustomDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        title="add Graph"
      >
        <Googlesheets />
      </CustomDrawer>
    </div>
  );
};

export default RenderDrawer;
