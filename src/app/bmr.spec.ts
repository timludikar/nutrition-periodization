import {Bmr} from './bmr';

describe('Bmr', () => {
  it('should create an instance', () => {
    expect(new Bmr()).toBeTruthy();
  });

  it('should calculate height in feet', () => {
    var bmr = new Bmr();
    bmr.heightInFeet(6,2);
    expect(bmr.height).toEqual(187.96);
  });

  it('should calculate height in cm', () => {
    var bmr = new Bmr();
    bmr.heightInCm(187.96);
    expect(bmr.height).toEqual(187.96);
  });

  it('should calculate weight in Lbs', () => {
    var bmr = new Bmr();
    bmr.weightInLbs(215);
    expect(bmr.weight).toEqual(97.72);
  });

  it('should calculate weight in Kgs', () => {
    var bmr = new Bmr();
    bmr.weightInKgs(97.72);
    expect(bmr.weight).toEqual(97.72);
  });

  it('should set sex to male', () => {
    var bmr = new Bmr();
    bmr.sex = 'm';
    expect(bmr.sex).toEqual('m');
  });

  it('should set sex to female', () => {
    var bmr = new Bmr();
    bmr.sex = 'f';
    expect(bmr.sex).toEqual('f');
  });

  it('should not accept sex "p"', () => {
    var bmr = new Bmr();
    try {
      bmr.sex = 'p'
    } catch (e){
      expect(bmr.sex).not.toEqual("m");
      expect(e.message).toEqual("m or f values only.");
    }    
  });

  it('should calculate male BMR', () => {
    var bmr = new Bmr();
    bmr.heightInFeet(6,2);
    bmr.weightInLbs(215);
    bmr.age = 32;
    bmr.sex = 'm';
    expect(bmr.calculate).toEqual(1996.94);
  });

  it('should calculate female BMR', () => {
    var bmr = new Bmr();
    bmr.heightInFeet(6,2);
    bmr.weightInLbs(215);
    bmr.age = 32;
    bmr.sex = 'f';
    expect(bmr.calculate).toEqual(1830.94);
  });

  it('should error when missing information', () => {
    var bmr = new Bmr();
    bmr.heightInFeet(6,2);
    bmr.weightInLbs(215);
    bmr.sex = 'f';
    expect(bmr.calculate).toEqual(0);
  });
});
