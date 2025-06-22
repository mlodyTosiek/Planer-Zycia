// Zadania
// const tasksForm = document.getElementById('tasks-form');
// const tasksList = document.getElementById('tasks-list');
// const newTaskInput = document.getElementById('new-task-input');
// // Zadania// const tasksForm = document.getElementById('tasks-form');
const tasksList = document.getElementById('tasks-list');
const newTaskInput = document.getElementById('new-task-input');
tasksForm.addEventListener('submit', function(e) {
        e.preventDefault();
            const value = newTaskInput.value.trim();
                if (value) {
                            const li = document.createElement('li');
                                    li.className = 'flex items-center';
                                            li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
                                                    tasksList.appendChild(li);
                                                            newTaskInput.value = '';
                }
});
                            });                            
                            // Nawyki
                            // const habitsForm = document.getElementById('habits-form');
                            // const habitsList = document.getElementById('habits-list');
                            //                             // Nawyki
                            // const habitsForm = document.getElementById('habits-form');
                            // consttasksList=const habitsList = document.getElementById('habits-list');
        li.className = 'flex items-center justify-between';
                li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
                                            // const newHabitInput = document.getElementById('new-habit-input');
                            // habitsForm.addEventListener('submit', function(e) {
                            //     e.preventDefault();
        li.className = 'flex items-center justify-between';
                li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
                        habitsList.appendChild(li);
                                newHabitInput.value = '';
                                                    }
                                                                            });
                                                                            
                                                                            // Cele
const goalsForm = document.getElementById('goals-form');
                                                                            // const goalsForm = document.getElementById('goals-form');
const goalsList = document.getElementById('goals-list');
const newGoalInput = document.getElementById('new-goal-input');
const goalsList = document.getElementById('goals-list');
const newGoalInput = document.getElementById('new-goal-input');
                                                                            // const goalsList = document.getElementById('goals-list');
                <span class='text-sm font-medium'>${name}</span></span>                                                                            // const newGoalInput = document.getElementById('new-goal-input');
                                                                            // //     const value = newHabitInput.value.trim();
                            //     if (value) {
        li.innerHTML = `
                    <div class='flex justify-between items-center mb-1'>
                                    <span class='text-sm font-medium'>${name}</span>
                                                    <span class='text-sm text-gray-500'>${progress}%</span>
                                                    `        const li = document.createElement('li');
                li.className = 'flex items-center justify-between';
                                            // document.getElementById('tasks-list');
const newTaskInput = document.getElementById('new-task-input');
tasksForm.addEventListener('submit', function(e) {
    e.preventDefault();
        const value = newTaskInput.value.trim();
            if (value) {
        const li = document.createElement('li');
        li.className = 'flex items-center';
                li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
                        tasksList.appendChild(li);
                                newTaskInput.value = '';
                            }
                                        });
                                        
                                        // Nawyki
                                        // const habitsForm = document.getElementById('habits-form');
                                        // const habitsList = document.getElementById('habits-list');
                                        // const newHabitInput = document.getElementById('new-habit-input');
                                        // habitsForm.addEventListener('submit', function(e) {
                                        //     e.preventDefault();
                                        //     const value = newHabitInput.value.trim();
                                        //     if (value) {
                                        //         const li = document.createElement('li');
                                        //         li.className = 'flex items-center justify-between';
                                        //         li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
                                    // Cele
                                    //     //         habitsList.appendChild(li);
                                        //         newHabitInput.value = '';
                                                                            });
                                                                            
                                                                            // Cele
                                                                            // const goalsForm = document.getElementById('goals-form');
                                                                            // //     }
                                    });
                                    
                                    li.className = 'flex items-center';
    e.preventDefault();
        const name = newGoalInput.value.trim();
                                liinnerHTML=    let progress = parseInt(newGoalProgress.value, 10);
                                    if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
                                                const li = document.createElement('li');
                                                        li.innerHTML = `
                                                                    <div class='flex justify-between items-center mb-1'>
                                                                                    <span class='text-sm font-medium'>${name}</span>
                                                                                                    <span class='text-sm text-gray-500'>${progress}%</span>
                                                                                                                </div>
                                                                                                                            <div class='w-full bg-gray-200 rounded-full h-2'>
                                                                                                                                            <div class                <div class='bg-blue-600 h-2 rounded-full' style='width: ${progress}%'></div>
                                                                                                                                                        </div>
                                                                                                                                                                                         }`<input type='checkbox' class='mr-2'><span>${value}</span>`;        `;
                                                                                                                                                                                                 goalsList.appendChild(li);
                                                                                                                                                                                                         tasksListappendChildli        newGoalInput.value = '';
                                                                                                                                                                                                                 newGoalProgress.value = '';
                                    }
                                });
                                // Zadania
                                // const tasksForm = document.getElementById('tasks-form');
                                // const tasksList = document.getElementById('tasks-list');
                                // const newTaskInput = document.getElementById('new-task-input');
                                // tasksForm.addEventListener('submit', function(e) {
                                //     e.preventDefault();
                                //     const value = newTaskInput.value.trim();
                                // });    if (value) {
                                //         const li = document.createElement('li');
                                //         li.className = 'flex items-center';
                                //         li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
                                // }                newTaskInput.value = '';
                                            }
                                                                        });
                                                                        
                                                                        // Nawyki
const habitsForm = document.getElementById('habits-form');
const habitsList = document.getElementById('habits-list');
                                                                        //consthabitsFormconst newHabitInput = document.getElementById('new-habit-input');
                                                                        // habitsForm.addEventListener('submit', function(e) {
                                                                        //     e.preventDefault();
                                                                        // })= document.getElementById('habits-form');
                                                                        // const habitsList = document.getElementById('habits-list');
                                                                        // tasksList.appendChild(li);const newHabitInput = document.getElementById('new-habit-input');
                                                                        // habitsForm.addEventListener('submit', function(e) {
                                                                        // })                                        newTaskInput.value = '';
                                    }    e.preventDefault();
                                        const value = newHabitInput.value.trim();
                                            if (value) {
                                                        const li = document.createElement('li');
                                                                li.className = 'flex items-center justify-between';
                                                                        li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
                                                                                habitsList.appendChild(li);
                                                                                newHabitInput        newHabitInput.value = '';
                                                                                        }
                                                                                    });
                                                                                
                                                                                }
});

});

// Nawyki
const newHabitInput = document.getElementById('new-habit-input');
habitsForm.addEventListener('submit', function(e) {
        e.preventDefault();
            const value = newHabitInput.value.trim();
                if (value) {
                            const li = document.createElement('li');
                                    li.className = 'flex items-center justify-between';
                                            li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
                                                    habitsList.appendChild(li);
                                                            newHabitInput.value = '';
                                                            // const habitsForm = document.getElementById('habits-form');    }
                                                            // });
                                                            // // Nawyki
// const habitsForm = document.getElementById('habits-form');
// // const habitsList = document.getElementById('habits-list');
// const newHabitInput = document.getElementById('new-habit-inp
// // Cele
// const goalsForm = document.getElementById('goals-form');
// const goalsList = document.getElementById('goals-list');
// const newGoalInput = document.getElementById('new-goal-input');
// const newGoalProgress = document.getElementById('new-goal-progress');
// ut');
// habitsForm.addEventListener('submit', function(e) {
//     e.preventDefault();
// })});
                                                        
                                                        // Nawyki
                                                        // const li = document.createElement('li');
                                li.className = 'flex items-center';
                                        li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
                                                tasksList.appendChild(li);
const goalsForm = document.getElementById('goals-form');
                                                        newTaskInput.value = '';
            }
        });

    }
});
// Zadania
// const tasksForm = document.getElementById('tasks-form');
// const tasksList = document.getElementById('tasks-list');
// const newTaskInput = document.getElementById('new-task-input');
// tasksForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const value = newTaskInput.value.trim();
//     if (value) {
// }})            }       e
            // Nawyki
            // const habitsForm = document.getElementById('habits-form');
            // const habitsList = document.getElementById('habits-list');
    if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
                const li = document.createElement('li');

    }            // const newHabitInput = document.getElementById('new-habit-input');
            // habitsForm.addEventListener('submit', function(e) {
            //     e.preventDefault();
            //     const value = newHabitInput.value.trim();
            //     if (value) {
            // preventDefault();
            const value = newTaskInput.value.trim();
    if (value) {
                const li = document.createElement('li');
                        li.className = 'flex items-center';
                                li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
        tasksList.appendChild(li);
                newTaskInput.value = '';
                                            }
                                                                                });
                                                                                
                                                                                // Nawyki
                                                                                // const habitsForm = document.getElementById('habits-form');
                                                                                // const habitsList = document.getElementById('habits-list');
                                                                                // const newHabitInput = document.getElementById('new-habit-input');
                                                                                // tasksList.appendChild(li);habitsForm.addEventListener('submit', function(e) {
                                                                                //     e.preventDefault();
                                                                                //     const value = newHabitInput.value.trim();
    if (value) {

    }           const li = document.createElement('li');
            li.className = 'flex items-center justify-between';
});
// Zadania
// const tasksForm = document.getElementById('tasks-form');
// const tasksList = document.getElementById('tasks-list');
//                                                                                          //     if (value) {
                                                                                //         const li = document.createElement('li');
                                                                                //         li.className = 'flex items-center justify-between';
            </div>
                    `;
                                                                                                    //         li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
                                                                                //         habitsList.appendChild(li);
                                                                                //         newHabitInput.value = '';
                                                                                //     }
                                                                                });
                                                                            
                                                                            // Cele
                                                                            // const goalsForm = document.getElementById('goals-form');
                                                                            // const goalsList = document.getElementById('goals-list');
                                                                            // const newGoalInput = document.getElementById('new-goal-input');
                                                                            // const newGoalProgress = document.getElementById('new-goal-progress');
                                                                            // goalsForm.addEventListener('submit', function(e) {
                                                                            //     e.preventDefault();
                                                                            //     const name = newGoalInput.value.trim();
                                                                            //     let progress = parseInt(newGoalProgress.value, 10);
                                                                            //     if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
                                                                            //         const li = document.createElement('li');
                                                                            //         li.innerHTML = `
                                                                            //             <div class='flex justify-between items-center mb-1'>
                                                                            //                 <span class='text-sm font-medium'>${name}</span>
                                                                            //                 <span class='text-sm text-gray-500'>${progress}%</span>
                                                                            // }})}})                                               newTaskInput            </div>
                                                                            //             <div class='w-full bg-gray-200 rounded-full h-2'>
                                                                            // value = '';                <div class='bg-blue-600 h-2 rounded-full' style='width: ${progress}%'></div>
                                                                                        </div>
                                                                                            `;
                                                                                                    goalsList.appendChild(li);
                                                                                                            newGoalInput.value = '';
                                                                                                                    newGoalProgress.value = '';
                                                                            }
                                                                            });
                                                                            // Zadania
                                                                            // const tasksForm = document.getElementById('tasks-form');
                                                                            // const tasksList = document.getElementById('tasks-list');
                                                                            // const newTaskInput = document.getElementById('new-task-input');
                                                                            // `                                                   }                                                    }tasksForm.addEventListener('submit', function(e) {
                                                                                    e.preventDefault();

                                                                            })           tasksForm.addEventListener('submit', function(e) {    if (value) {
                        const li = document.createElement('li');
                                li.className = 'flex items-center';
                                        li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
                                                tasksList.appendChild(li);
                                                        newTaskInput.value = '';
            }
        });

        // Nawyki

            }        e.preventDefault();
            const value = newTaskInput.value.trim();
habitsForm.addEventListener('submit', function(e) {

})               if(value    e.preventDefault();
    const value = newHabitInput.value.trim();
     {
                            const li = document.createElement('li');
                                    li.className = 'flex ite    }
                });
        const li = document.createElement('li');
                li.className = 'flex items-center justify-between';
                        li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
    e.preventDefault();
        const name = newGoalInput.value.trim();
            let progress = parseInt(newGoalProgress.value, 10);
                if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
                            const li = document.createElement('li');
                                                    }                               habitsList        li.innerHTML = `
                                                                <div class='flex justify-between items-center mb-1'>
                                                                                <span class='text-sm font-medium'>${name}</span>
                                                                                                <span class='text-sm text-gray-500'>${progress}%</span>
                                                                                                            </div>
                                                                                                                        <div class='w-full bg-gray-200 rounded-full h-2'>
                                                                                                                                        <div class='bg-blue-600 h-2 rounded-full' style='width: ${progress}%'></div>
                                                                                                                                        appendChildli;            </div>
                                                                                                                                                `;
                                                                                                                                                        goalsList.appendChild(li);
                                                                                                                                                                newGoalInput.value = '';
                                                                                                                                                                        newGoalProgress.value = '';
                                                                                        }
                                                                                                                                newHabitInputvalue=});
                                                                                                                                // Zadania
                                                                                                                                // const tasksForm = document.getElementById('tasks-form');
                                                                                                                                // const tasksList = document.getElementById('tasks-list');
                                                                                                                                // const newTaskInput = document.getElementById('new-task-input');
                                                                                                                                // tasksForm.addEventListener('submit', function(e) {
                                                                                                                                //     e.preventDefault();
                                                                                                                                //     const value = newTaskInput.value.trim();
                                                                                                                                //     if (value) {
                                                                                                                                // '';
            }
        });
        
        // Cele
        const goalsForm = document.getElementById('goals-form');
        const goalsList = document.getElementById('goals-list');
        const newGoalInput = document.getElementById('new-goal-input');
            </div>
                        <div class='w-full bg-gray-200 rounded-full h-2'>
                                            <div class='bg-blue-600 h-2 rounded-full' style='width: ${progress}%'></div>            </div></div>
                        </div>        const newGoalProgress = document.getElementById('new-goal-progress');
        goalsForm.addEventListener('submit', function(e) {
                e.preventDefault();
                    const name = newGoalInput.value.trim();
                        let progress = parseInt(newGoalProgress.value, 10);
                            if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
                                        const li = document.createElement('li');
                                                li.innerHTML = `
                                                            <div class='flex justify-between items-center mb-1'>
                                                                            <span class='text-sm font-medium'>${name}</span>
                                                                                            <span class='text-sm text-gray-500'>${progress}%</span>
                                                                                                        </div>
                                                                                                                    <div class='w-full bg-gray-200 rounded-full h-2'>
                                                                                                                                    <div class='bg-blue-600 h-2 rounded-full' style='width: ${progress}%'></div>
                                                                                                                                                </div>
                                                                                                                                                        `;
                                                                                                                                                                goalsList.appendChild(li);
                                                                                                                                                                        newGoalInput.value = '';
                                                                                                                                                                                newGoalProgress.value = '';
                            }
                        });
                        `
                            }
        })
                // Nawyki
                // const habitsForm = document.getElementById('habits-form');
                // const habitsList = document.getElementById('habits-list');
        newHabitInput.value = '';
            }
                        });
                        
                        // Cele
                        // const goalsForm = document.getElementById('goals-form');
                        // const goalsList = document.getElementById('goals-list');
                        // const newGoalInput = document.getElementById('new-goal-input');
                        // const newGoalProgress = document.getElementById('new-goal-progress');
                        // goalsForm.addEventListener('submit', function(e) {
                        //     e.preventDefault();
                        //     const name = newGoalInput.value.trim();
                        //     let progress = parseInt(newGoalProgress.value, 10);
                        //     if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
                        //         const li = document.createElement('li');
                        // // ms-center';
                                            li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
                                                    tasksList.appendChild(li);
                                                            newTaskInput.value = '';
                                                            // const tasksList = document.getElementById('tasks-list');
// // Zadania
// const tasksForm = document.getElementById('tasks-form');
// const tasksList = document.getElementById('tasks-list');
// const newTaskInput = document.getElementById('new-task-input');
// tasksForm.addEventListener('submit', function(e) {
//     e.preventDefault();
        li.className = 'flex items-center';
                li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
        tasksList.appendChild(li);
                newTaskInput.value = '';
                        }
                                            });

                                            // Nawyki
                                            const habitsForm = document.getElementById('habits-form');
                                            const habitsList = document.getElementById('habits-list');
                                            const newHabitInput = document.getElementById('new-habit-input');
                                            habitsForm.addEventListener('submit', function(e) {

                                            })
                                            // Nawyki
                                            // tasksList.appendChild(li);
                                newTaskInput.value = '';
        li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
                habitsList.appendChild(li);
                        newHabitInput.value = '';
                                                                        }
                                                                                                    });
                                                                                                    
                                                                                                    // Cele
                                                                                                    // const goalsForm = document.getElementById('goals-form');
                                                                                                    // const goalsList = document.getElementById('goals-list');
                                                                                                    // const newGoalInput = document.getElementById('new-goal-input');
                                                                                                    // const newGoalProgress = document.getElementById('new-goal-progress');
                                                                                                    // goalsForm.addEventListener('submit', function(e) {
                                                                                                    //     e.preventDefault();
                                                                                                    //     const name =    let progress = parseInt(newGoalProgress.value, 10);
                                                                                                    //     if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
                                                                                                    //         const li = document.createElement('li');
                                                                                                    //         li.innerHTML = `
                                                                                                    //             <div class='flex justify-between items-center mb-1'>
                                                                                                    //                 <span class='text-sm font-medium'>${name}</span>
                                                                                                    //                 <span class='text-sm text-gray-500'>${progress}%</span>
                                                                                                    // }newGoalInput            </div>
                                                                                                    //             <div class='w-full bg-gray-200 rounded-full h-2'>
                                                                                                    //                 <div class='bg-blue-600 h-2 rounded-full' style='width: ${progress}%'></div>
                                                                                                    //             </div>
                                                                                                    //         `;
                                                                                                    // value.trim();        goalsList.appendChild(li);
                                                                                                    //         newGoalInput.value = '';
                                                                                                    //         newGoalProgress.value = '';
                                                                                                    //     }
                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                                        ////// Zadania
                                                                                                                                                                                                                                                                                                        //   constvaluenewTaskInputvalueconst tasksForm = document.getElementById('tasks-form');
                                                                                                                                                                                                                                                                                                        // const tasksList = document.getElementById('tasks-list');
                                                                                                                                                                                                                                                                                                        // const newTaskInput = document.getElementById('new-task-input');
                                                                                                                                                                                                                                                                                                        // tasksForm.addEventListener('submit', function(e) {
                                                                                                                                                                                                                                                                                                        //         const li = document.createElement('li');
                                                                                                                                                                                                                                                                                                        //         li.className = 'flex items-center';
                                                                                                                                                                                                                                                                                                        //     e        li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
                                                                                                                                                                                                                                                                                                        //         tasksList.appendChild(li);
                                                                                                                                                                                                                                                                                                        //         newTaskInput.value = '';
                                                                                                                                                                                                                                                                                                        //     }
                                                                                                                                                                                                });
                                                                                                                                                                                                
                                                                                                                                                                                                // Nawyki
                                                                                                                                                                                                // const habitsForm = document.getElementById('habits-form');
                                                                                                                                                                                                // const habitsList = document.getElementById('habits-list');
                                                                                                                                                                                                // const newHabitInput = document.getElementById('new-habit-input');
                                                                                                                                                                                                // habitsForm.addEventListener('submit', function(e) {
                                                                                                                                                                                                // preventDefault();
                                                                                                                                                                                                                                                                                                        //     const value = newTaskInput.value.trim();
                                                                                                                                                                                                                                                                                                        //     if (value) {
                                                                                                                                                                                                                                                                                                        // trim();
//     if (value) {
//         const li = document.createElement('li');
//         li.className = 'flex items-center';
const habitsForm = document.getElementById('habits-form');
const habitsList = document.getElementById('habits-list');
con    e.preventDefault();
    const value = newHabitInput.value.trim();
        if (value) {
                    const li = document.createElement('li');
                            li.className = 'flex items-center justify-between';
                                    li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
                                            habitsList.appendChild(li);
       const goalsForm = document.getElementById('goals-form');
       const goalsList = document.getElementById('goals-list');
       const newGoalInput = document.getElementById('new-goal-input');
       const newGoalProgress = document.getElementById('new-goal-progress');
        li.innerHTML = `
                    <div class='flex justify-between items-center mb-1'>
                                    <span class='text-sm font-medium'>${name}</span>
                                                    <span class='text-sm text-gray-500'>${progress}%</span>
                                                                </div>
                                                                            <div class='w-full bg-gray-200 rounded-full h-2'>
                                                                                            <div class='bg-blue-600 h-2 rounded-full' style='width: ${progress}%'></div>
                                                                                                        </div>
                                                                                                                `;
                                                                                                                        goalsList.appendChild(li);
                                                                                                                                newGoalInput.value = '';
                                                                                                                                        newGoalProgress.value = '';
        }
    });
    // Zadania
    // const tasksForm = document.getElementById('tasks-form');
    // const tasksList = document.getElementById('tasks-list');
    // const newTaskInput = document.getElementById('new-task-input');
    // tasksForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     const value = newTaskInput.value.trim();
    //     if (value) {
    //     }
        });
        
        // Nawyki
        // const habitsForm = document.getElementById('habits-form');
        // const habitsList = document.getElementById('habits-list');
        // const newHabitInput = document.getElementById('new-habit-input');
        // habitsForm.addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     const value = newHabitInput.value.trim();
        //     if (value) {
        //         const li = document.createElement('li');
        //         li.className = 'flex items-center justify-between';
        //         li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
        //         habitsList.appendChild(li);
        // const li = document.createElement('li');
    //         li.className = 'flex items-center';
    //         li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
    //         tasksList.appendChild(li);
    //         newTaskInput.value = '';
    // }})`       goalsForm.addEventListener('submit', function(e) {
            e.preventDefault();
                const name = newGoalInput.value.trim();
                    let progress = parseInt(newGoalProgress.value, 10);
                        if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
                                    const li = document.createElement('li');
                                            li.innerHTML = `
                                                        <div class='flex justify-between items-center mb-1'>
                                                                        <span class='text-sm font-medium'>${name}</span>
                                                                                        <span class='text-sm text-gray-500'>${progress}%</span>
                                                                                                    </div>
                                                                                                                <div class='w-full bg-gray-200 rounded-full h-2'>
                                                                                                                                <div class='bg-blue-600 h-2 rounded-full' style='width: ${progress}%'></div>
                                                                                                                                            </div>
                                                                                                                                                    `;
                                                                                                                                                            goalsList.appendChild(li);
                                                                                                                                                                    newGoalInput.value = '';
                                                                                                                                                                            newGoalProgress.value = '';
        newGoalProgress.value = '';
                                                }
                               });
                            // Zadania
                                                    tasksForm.addEventListener                   });
                    `
                        }
       })                                             newHabitInput.value = '';
        }
    });
    
    // Cele
    // st newHabitInput = document.getElementById('new-habit-input');
//const       lihabitsForm.addEventListener('submit', function(e) {
// innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
//         tasksList.appendChild(li);

// Nawyki
// const habitsForm = document.getElementById('habits-form');
// const habitsList = document.getElementById('habits-list');
// const newHabitInput = document.getElementById('new-habit-input');
// habitsForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const value = newHabitInput.value.trim();
//     if (value) {
//         const li = document.createElement('li');
//         li.className = 'flex items-center justify-between';
//         li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
//         habitsList.appendChild(li);
//         newHabitInput.value = '';
//     }
});
//newTaskInput        newTaskInputvalue = '';
// document.getElementById('new-t// Zadania
const tasksForm = document.getElementById('tasks-form');
const tasksList = document.getElementById('tasks-list');
con    }
});

// Nawyki
// const habitsForm = document.getElementById('habits-form');
// stnewTaskInputconst habitsList = document.getElementById('habits-list');
// const newHabitInput = document.getElementById('new-habit-input');
// habitsForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const value = newHabitInput.value.trim();
//     if (value) {
// }})= document.getElementById('new-task-input');
tasksForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = newTaskInput.value.trim();
    if (value) {
        tasksList.appendChild(li);
                newTaskInput.value = '';
            }
                    const li = document.createElement('li');
        li.className = 'flex items-center';
        li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
        tasksList.appendChild(li);
        newTaskInput.value = '';
    }
});

// Nawyki
const habitsForm = document.getElementById('habits-form');
const habitsList = document.getElementById('habits-list');
const newHabitInput = document.getElementById('new-habit-input');
habitsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = newHabitInput.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between';
        li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
        habitsList.appendChild(li);
        newHabitInput.value = '';
    }
});

// Cele
const goalsForm = document.getElementById('goals-form');
goalsForm.addEventListener('submit', function(e) {
        e.preventDefault();
            const name = newGoalInput.value.trim();
                let progress = parseInt(newGoalProgress.value, 10);
                    if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
                        const goalsList = document.getElementById('goals-list');
const newGoalInput = document.getElementById('new-goal-input');
const newGoalProgress = document.getElementById('new-goal-progress');
goalsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = newGoalInput.value.trim();
    let progress = parseInt(newGoalProgress.value, 10);
    if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class='flex justify-between items-center mb-1'>
                <span class='text-sm font-medium'>${name}</span>
                <span class='text-sm text-gray-500'>${progress}%</span>
    }
    });
    // Zadania
    // const tasksForm = document.getElementById('tasks-form');
    // const tasksList = document.getElementById('tasks-list');
    //             </div>
            <div class='w-full bg-gray-200 rounded-full h-2'>
                <div class='bg-blue-600 h-2 rounded-full' style='width: ${progress}%'></div>
            </div>
        `;
        goalsList.appendChild(li);
        newGoalInput.value = '';
        newGoalProgress.value = '';
    }
});removeEventListener.addEventListener('submit', function(e) {tasksForm.value.trim()
        e.preventDefault();
            const value = newTaskInpu
})
;
