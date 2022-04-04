const { Application, User } = require('../models');

module.exports = {
  getApplications(req, res) {
    Application.find()
      .then((applications) => res.json(applications))
      .catch((err) => res.status(500).json(err));
  },
  getSingleApplication(req, res) {
    Application.findOne({ _id: req.params.applicationId })
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with that ID' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the createApplication method
  createApplication(req, res) {
    Application.create(req.body)
      .then((application) => {
        return User.findOneAndUpdate(  //To find one and then update
          { _id: req.body.userId },  // this is the query or search criteria
          { $addToSet: { applications: application._id } },  // This adding a value to the set and not replacing the application.id
          { new: true }  // to display the udpate record
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Application created, but found no user with that ID',
            })
          : res.json('Created the application 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // TODO: Add comments to the functionality of the updateApplication method
  updateApplication(req, res) {
    Application.findOneAndUpdate(
      { _id: req.params.applicationId },
      { $set: req.body },  // this is replacing the entire value of the record
      { runValidators: true, new: true }  // validates if the input is correct that description length meet requirements
    )
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // TODO: Add comments to the functionality of the deleteApplication method
  deleteApplication(req, res) {
    Application.findOneAndRemove({ _id: req.params.applicationId })  //this is to remove or delete a record based on applicationId
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : User.findOneAndUpdate(
              { applications: req.params.applicationId },
              { $pull: { applications: req.params.applicationId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Application created but no user with this id!',
            })
          : res.json({ message: 'Application successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the addTag method
  addTag(req, res) {
    Application.findOneAndUpdate(
      { _id: req.params.applicationId },     // find a match based on applicationId
      { $addToSet: { tags: req.body } },      // add directly unto tags array without overwriting things
      { runValidators: true, new: true }    //run validators as per model requirement required: true 
    )
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the addTag method
  removeTag(req, res) {
    Application.findOneAndUpdate(
      { _id: req.params.applicationId },
      { $pull: { tags: { responseId: req.params.tagId } } },  //removes the tag record without touching everything else.
      { runValidators: true, new: true }  // 
    )
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
};
