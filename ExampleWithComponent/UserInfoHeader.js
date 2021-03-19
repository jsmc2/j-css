import React from "react";
import "./UserInfoHeader_styles"
import { PlaceholderButton, HomeButton, GridButton } from "?/component_libs/icon_buttons_lib";

export default (props) => {
  const cssSpc = 'UserInfoHeaderVC'
  return (
    <div {...props} className={'VC ' + cssSpc} >
      This is the UserInfoHeader
      <div className={cssSpc+'_layoutGrid'}>
        <div className={cssSpc+'_gridItem'}><GridButton /></div>
        <div className={cssSpc+'_gridItem'}>
          <div className="VCTodo MyLocVC">
            My location info
          </div>
        </div>
        <div className={cssSpc+'_gridItem'}>
          <PlaceholderButton />
        </div>
      </div>
    </div>
  );
}
