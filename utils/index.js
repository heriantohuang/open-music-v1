const mapDBToSong = ({ id, title, performer }) => ({
  id,
  title,
  performer,
});

module.exports = { mapDBToSong };
