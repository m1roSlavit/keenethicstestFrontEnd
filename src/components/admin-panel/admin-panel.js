import React from "react";

import {useLocalForage} from '../../hooks';
import './admin-panel.scss';
import BikeList from "../bikes-list";
import AddBikeForm from "../add-bike-form";
import Statistics from "../statistics";
import HorizontalSeparator from "../horizontal-separator";

const initBikeList = [];

const AdminPanel = () => {
  const [bikesList, setBikesList] = useLocalForage('bikes-list', initBikeList);

  if (!bikesList)
    setBikesList([]);

  const onAddBike = (bike) => {
    bike.status = 'available';

    setBikesList([...bikesList, bike]);
  };

  const _extractBikeIdx = (bikeId, bikesList) => {
    return bikesList.findIndex(bike => bike.id === bikeId);
  }

  const _updateBikesList = (bikeIdx, bikesList, bike) => {
    if (bike) {
      return [
        ...bikesList.slice(0, bikeIdx),
        bike,
        ...bikesList.slice(bikeIdx + 1),
      ]
    }

    return [
      ...bikesList.slice(0, bikeIdx),
      ...bikesList.slice(bikeIdx + 1),
    ]
  }

  const onDeleteBike = (bikeId) => {
    const bikeIdx = _extractBikeIdx(bikeId, bikesList);

    setBikesList(_updateBikesList(bikeIdx, bikesList));
  };

  const onChangeStatusBike = (bikeId, newStatus) => {
    const bikeIdx = _extractBikeIdx(bikeId, bikesList);
    const bike = bikesList[bikeIdx];
    const updatedBike = {
      ...bike,
      status: newStatus,
    }

    setBikesList(_updateBikesList(bikeIdx, bikesList, updatedBike));
  };

  return(
    <div className="admin-panel">
      <div className="admin-panel__col admin-panel__left-col">
        <BikeList bikesList={bikesList}
                  onChangeStatusBike={onChangeStatusBike}
                  onDeleteBike={onDeleteBike}
        />
      </div>
      <div className="admin-panel__col admin-panel__right-col">
        <AddBikeForm onAddBike={onAddBike} bikesList={bikesList}/>
        <HorizontalSeparator />
        <Statistics bikesList={bikesList}/>
      </div>
    </div>
  );
};

export default AdminPanel;