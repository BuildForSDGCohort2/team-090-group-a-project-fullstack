import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { AboutClassroomContainer } from './about-classroom.styles';

const AboutClassroom = ({ activeClassroom }) => {
    return (
        <AboutClassroomContainer>
            <h4>About</h4>
            {
                 activeClassroom && (
                    <TableContainer component={Paper}>
                      <Table aria-label="about table">
                        <TableBody>
                          {
                            <TableRow>
                              <TableCell scope="row">
                                <b>{'Name'}</b>
                              </TableCell>
                              <TableCell align="right">{activeClassroom.classroomName}</TableCell>
                            </TableRow>
                          }
                          {
                            <TableRow>
                              <TableCell scope="row">
                                <b>{'Description'}</b>
                              </TableCell>
                              <TableCell align="right">{activeClassroom.classroomDescription}</TableCell>
                            </TableRow>
                          }
                          {
                            <TableRow>
                              <TableCell scope="row">
                                <b>{'Creator'}</b>
                              </TableCell>
                              <TableCell align="right">{activeClassroom['classMembersInfo'][activeClassroom.createdBy]['memberProfile']['displayName']}</TableCell>
                            </TableRow>
                          }
                        </TableBody>
                      </Table>
                    </TableContainer>
                    )
            }
        </AboutClassroomContainer>
    );
} 


export default React.memo(AboutClassroom);