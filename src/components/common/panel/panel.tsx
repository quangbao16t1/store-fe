import React, { useState } from "react";
import styled from "styled-components";
import { Collapse } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  .custom-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
  }
  .header-content {
    display: flex;
    align-items: center;
  }

  .arrow-icon {
    margin-left: 8px;
    transition: transform 0.3s;
  }

  .arrow-icon-expanded {
    transform: rotate(90deg);
  }
`;

interface CustomPanelProps {
  headerLeft: React.ReactNode;
  headerRight: React.ReactNode;
  panelKey: string;
  children?: React.ReactNode;
  isActive: boolean;
}

const CustomPanel: React.FC<CustomPanelProps> = ({
  headerLeft,
  headerRight,
  children,
  isActive,
  panelKey,
}) => {
  const [expanded, setExpanded] = useState(false);

  const togglePanel = () => {
    setExpanded(!expanded);
  };

  const customHeader = (
    <div className="custom-panel-header" onClick={togglePanel}>
      <div>{headerLeft}</div>
      <div className="header-content">
        {headerRight}
        <RightOutlined
          className={`arrow-icon ${expanded ? "arrow-icon-expanded" : ""}`}
        />
      </div>
    </div>
  );

  return (
    <PanelStyled header={customHeader} key={panelKey}>
      {isActive && children}
    </PanelStyled>
  );
};

export default CustomPanel;
