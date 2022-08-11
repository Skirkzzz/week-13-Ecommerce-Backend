const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try {
    const TagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all tags and its associated Product data
});

router.get('/:id', (req, res) => {
  try {
    const TagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!TagData) {
      res.status(404).json({ message: 'Tag Not Found!' });
      return;
    }
  // find a single tag by its `id` including its associated Product data
});

router.post('/', (req, res) => {
  try {
    const newTagData = await Tag.create({
    tag_id: req.body.tag_name,
    });
    res.status(200).json(newTagData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', (req, res) => {
  try {
    const TagData = await Tag.save({
      where: {
        id: req.params.id,
      },
    });

    if (!TagData) {
      res.status(404).json({ message: 'Tag Not Found!' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  try {
    const TagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!TagData) {
      res.status(404).json({ message: 'Tag Not Found!' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
