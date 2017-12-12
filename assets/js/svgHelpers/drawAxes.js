import { axisBottom, axisLeft } from 'd3-axis';
import 'd3-selection-multi';
import { setTicks } from './setTicks';

// Important: Draw before drawing circles so circles are on top;
// that makes hover experience better
export function drawAxes(svgG, svgParams, varsMetaObj, currentVars) {
  const {
    width, height, margin, scales,
  } = svgParams;
  const { x, y } = currentVars;

  const xAxis = axisBottom(scales.x.function);
  const yAxis = axisLeft(scales.y.function);

  // const xScale = scales.x.function;
  // const yScale = scales.y.function;
  setTicks(scales, xAxis, yAxis);

  // Add the x Axis
  svgG
    .append('g')
    .attr('transform', `translate(0,${height})`)
    .call(xAxis)
    .style('font-family', 'franklin-gothic-urw')
    .style('font-size', '1.2em')
    .style('fill', '#000')
    .style('stroke-opacity', 1)
    .style('stroke-width', '1px');
  // .attr('class', 'axis axis--x');

  // Add the y Axis
  svgG
    .append('g')
    .call(yAxis)
    .style('font-family', 'franklin-gothic-urw')
    .style('font-size', '1.2em')
    .style('fill', '#000')
    .style('stroke-opacity', 1)
    .style('stroke-width', '1px');
  // .attr('class', 'axis axis--y');

  // text label for the x axis
  svgG
    .append('text')
    .attr('x', width / 2)
    .attr('y', height + margin.bottom)
    .attr('dy', '-50px')
    .style('font-size', '2em')
    .style('text-anchor', 'middle')
    .style('font-family', 'franklin-gothic-urw')
    .text(varsMetaObj[x].text);

  // text label for the y axis
  svgG
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', -margin.left)
    .attr('x', -height / 2)
    .attr('dy', '50px')
    .style('font-size', '2em')
    .style('text-anchor', 'middle')
    .style('font-family', 'franklin-gothic-urw')
    .text(varsMetaObj[y].text);

  return [xAxis, yAxis];
}
