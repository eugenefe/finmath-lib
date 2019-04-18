/*
 * (c) Copyright Christian P. Fries, Germany. Contact: email@christian-fries.de.
 *
 * Created on 09.02.2004
 */
package net.finmath.montecarlo;

import net.finmath.stochastic.RandomVariable;
import net.finmath.stochastic.Scalar;

/**
 * A factory (helper class) to create random variables.
 *
 * By changing the factory implementation used, you can (more or less globally)
 * change which implementation of random variable is used.
 *
 * @author Christian Fries
 * @version 1.0
 */
public class RandomVariableFactory extends AbstractRandomVariableFactory {

	private static final long serialVersionUID = 9124600813005863273L;

	private final boolean isUseDoublePrecisionFloatingPointImplementation;

	public RandomVariableFactory() {
		super();
		isUseDoublePrecisionFloatingPointImplementation = true;
	}

	public RandomVariableFactory(boolean isUseDoublePrecisionFloatingPointImplementation) {
		super();
		this.isUseDoublePrecisionFloatingPointImplementation = isUseDoublePrecisionFloatingPointImplementation;
	}

	@Override
	public RandomVariable createRandomVariable(double value) {
		return new Scalar(value);
	}

	@Override
	public RandomVariable createRandomVariable(double time, double value) {
		return new Scalar(value);
		/*
		if(isUseDoublePrecisionFloatingPointImplementation) {
			return new RandomVariableFromDoubleArray(time, value);
		} else {
			return new RandomVariableFromFloatArray(time, value);
		}
		 */
	}

	@Override
	public RandomVariable createRandomVariable(double time, double[] values) {
		if(isUseDoublePrecisionFloatingPointImplementation) {
			return new RandomVariableFromDoubleArray(time, values);
		} else {
			return new RandomVariableFromFloatArray(time, values);
		}
	}
}
