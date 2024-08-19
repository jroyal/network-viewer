import React from 'react';

import Search from './../Components/Filters/Search';
import Styles from './FilterContainer.styles.scss';
import ResetButton from '../Components/Actions/ResetButton';
import StatusFilter from '../Components/Filters/StatusFilter';
import ExportHarButton from '../Components/Actions/ExportHarButton';
import PauseResumeButton from '../Components/Actions/PauseResumeButton';
import TypeFilter from '../Components/Filters/TypeFilter';
import AccessFilter from '../Components/Filters/AccessFilter';
import GatewayFilter from '../Components/Filters/GatewayFilter';
import ImportHAR from '../Components/Import/ImportHAR';
import { useTheme } from '../state/theme/Context';
import { useNetwork } from '../state/network/Context';

const FilterContainer = () => {
  const { state, actions } = useNetwork();
  const {
    showImportHar,
    showExportHar,
    showPauseResume,
  } = useTheme();
  const filterByAccess = state.get('accessFilter');
  const filterByGateway = state.get('gatewayFilter');

  return (
    <section className={Styles['filters-container']}>
      <div className={Styles['filter-row']}>
        <StatusFilter />
        <Search {...state.get('search')} />
        {showPauseResume && <PauseResumeButton />}
        <ResetButton />
        {showExportHar && <ExportHarButton rawData={state.get('rawData')} />}
        {showImportHar && <ImportHAR />}
      </div>

      <div className={Styles['type-filter-row']}>
        <TypeFilter />
        <AccessFilter
          isAccess={filterByAccess.value}
          onChange={actions.updateAccessFilter}
        />
        <GatewayFilter
          isGateway={filterByGateway.value}
          onChange={actions.updateGatewayFilter}
        />
      </div>
    </section>
  );
};

export default FilterContainer;
