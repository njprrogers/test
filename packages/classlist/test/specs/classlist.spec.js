const classlist = require('../../src/classlist');

describe('classlist', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.className = 'foo bar';
  });

  context('when contains is called', () => {
    it('should determine whether class name exists', () => {
      expect(classlist.contains(element, 'foo')).to.equal(true);
      expect(classlist.contains(element, 'bar')).to.equal(true);
      expect(classlist.contains(element, 'baz')).to.equal(false);
    });
  });

  context('when add is called', () => {
    it('should add class name', () => {
      classlist.add(element, 'baz');
      expect(element).to.have.property('className', 'foo bar baz');
    });

    it('should add multiple class names', () => {
      classlist.add(element, 'baz', 'qux');
      expect(element).to.have.property('className', 'foo bar baz qux');
    });

    it('should not add extra whitespace', () => {
      classlist.add(' baz ');
      expect(element).to.have.property('className', 'foo bar baz');
    });

    it('should not add the same class name in seperate calls', () => {
      classlist.add(element, 'baz');
      classlist.add(element, 'baz');
      expect(element).to.have.property('className', 'foo bar baz');
    });

    it('should not add the same class name twice in the same call', () => {
      classlist.add(element, 'baz', 'baz');
      expect(element).to.have.property('className', 'foo bar baz');
    });

    it('should not fail when provided undefined values', () => {
      classlist.add(element, undefined);
      expect(element).to.have.property('className', 'foo bar');
    });
  })

  context('when remove is called', () => {
    it('should remove provided class name', () => {
      classlist.remove(element, 'bar');
      expect(element).to.have.property('className', 'foo');
    });

    it('should remove multiple class names', () => {
      classlist.remove(element, 'foo', 'bar');
      expect(element).to.have.property('className', '');
    });

    it('should not fail when provided with undefined values', () => {
      classlist.remove(element, undefined);
      expect(element).to.have.property('className', 'foo bar baz');
    });
  });

  context('when item is called', () => {
    it('should return class name at specified index', () => {
      expect(classlist.item(element, 0)).to.equal('foo');
      expect(classlist.item(element, 1)).to.equal('bar');
    });
  });

  context('when toggle is called', () => {
    it('should remove existing class name and return false', () => {
      const result = classlist.toggle(element, 'bar');
      expect(element).to.have.property('className', 'foo');
      expect(result).to.equal(false);
    });

    it('should add class name and return true otherwise', () => {
      const result = classlist.toggle(element, 'baz');
      expect(element).to.have.property('className', 'foo bar baz');
      expect(result).to.equal(true);
    });

    it('should remove class name and return false when third argument evaluates to false', () => {
      const result = classlist.toggle(element, 'bar', false);
      expect(element).to.have.property('className', 'foo');
      expect(result).to.equal(false);
    });

    it('should add class name and return true when third argument evaluates to true', () => {
      const result = classlist.toggle(element, 'baz', true);
      expect(element).to.have.property('className', 'foo bar baz');
      expect(result).to.equal(true);
    });
  });

});
