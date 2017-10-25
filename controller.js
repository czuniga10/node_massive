
  module.exports = {
    getPlane: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
      dbInstance.get_plane([req.params.id])
        .then(plane => { res.status(200).send(plane); })
        .catch( err => {
          console.log(err);
          res.status(500).send(err);
        });
    },
    getPlanes: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
      dbInstance.get_planes()
        .then(planes => { res.status(200).send(planes); })
        .catch( err => {
          console.log(err);
          res.status(500).send(err);
        });
    },
    postPlane:(req, res, next ) => {
      const dbInstance = req.app.get('db');
      dbInstance.post_plane([req.body.planeType, req.body.passengerCount])
      .then(planes => {res.status(200).send(planes)})
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
    }
  };
